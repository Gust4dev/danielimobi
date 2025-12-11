const fs = require('fs');
const path = require('path');

// Try to require sharp
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('\x1b[31m%s\x1b[0m', 'Erro: A biblioteca "sharp" não está instalada.');
    console.log('Por favor, execute "npm install sharp" antes de rodar este script.');
    process.exit(1);
}

const TARGET_DIR = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1920;
const QUALITY = 80;

// Helper to format bytes
const formatBytes = (bytes) => (bytes / 1024 / 1024).toFixed(2) + ' MB';

// Helper to wait
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function optimizeImage(filePath) {
    try {
        const tempPath = filePath + '.tmp';
        
        const image = sharp(filePath);
        const metadata = await image.metadata();
        const originalSize = fs.statSync(filePath).size;

        let pipeline = image;

        // Resize if too big
        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }

        // Compress based on format
        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
        } else if (metadata.format === 'png') {
            pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8, palette: true });
        } else if (metadata.format === 'webp') {
            pipeline = pipeline.webp({ quality: QUALITY });
        } else {
            return; // Skip other formats
        }

        const buffer = await pipeline.toBuffer();
        const newSize = buffer.length;

        // Only overwrite if we saved space
        if (newSize < originalSize) {
            // Write to temp file first to avoid locking issues
            fs.writeFileSync(tempPath, buffer);
            
            // Wait a tiny bit to release handles
            await wait(100);
            
            // Rename temp to original (atomic operation usually safer)
            try {
                fs.unlinkSync(filePath);
                fs.renameSync(tempPath, filePath);
                 const saved = ((originalSize - newSize) / 1024).toFixed(2);
                console.log(`\x1b[32m✔ Otimizado:\x1b[0m ${path.relative(TARGET_DIR, filePath)} (${formatBytes(originalSize)} -> ${formatBytes(newSize)}) - Saved ${saved} KB`);
            } catch (err) {
                 console.error(`\x1b[31m✖ Erro ao substituir arquivo ${filePath} (está aberto?):\x1b[0m`, err.message);
                 if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            }
           
        } else {
            console.log(`\x1b[33m• Ignorado (Já otimizado):\x1b[0m ${path.relative(TARGET_DIR, filePath)}`);
        }

    } catch (error) {
        // Only log real errors, not just "input buffer contains unsupported image format" etc
        console.error(`\x1b[31m✖ Erro ao processar ${path.basename(filePath)}:\x1b[0m`, error.message);
    }
}

async function walkDir(dir) {
    // Read all files first
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        console.error(`Erro ao ler diretório ${dir}`);
        return;
    }

    for (const file of files) {
        const filePath = path.join(dir, file);
        let stat;
        try {
             stat = fs.statSync(filePath);
        } catch(e) { continue; } // Skip if can't stat

        if (stat.isDirectory()) {
            await walkDir(filePath);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            // Process sequentially with a small delay to avoid OS overwhelming
            await optimizeImage(filePath);
            await wait(50); 
        }
    }
}

(async () => {
    // Disable sharp cache to prevent file locking
    sharp.cache(false);
    
    console.log(`Iniciando otimização em: ${TARGET_DIR}`);
    console.log(`Configuração: Max Width=${MAX_WIDTH}px, Quality=${QUALITY}%`);
    console.log('-'.repeat(50));
    await walkDir(TARGET_DIR);
    console.log('-'.repeat(50));
    console.log('Concluído!');
})();
