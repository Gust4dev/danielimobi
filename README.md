
<div align="center">
  <h1 align="center">Luxury Real Estate Landing Page Template</h1>
  <p align="center">
    Um template moderno, elegante e de alta conversão para o mercado imobiliário de alto padrão.
    <br />
    <a href="#getting-started"><strong>Começar Agora »</strong></a>
    <br />
    <br />
    <a href="https://react.dev/">React</a>
    ·
    <a href="https://vitejs.dev/">Vite</a>
    ·
    <a href="https://tailwindcss.com/">Tailwind CSS</a>
    ·
    <a href="https://www.framer.com/motion/">Framer Motion</a>
  </p>
</div>

## ✨ Sobre o Projeto

Este projeto é um template **Premium** desenvolvido para corretores, imobiliárias e incorporadoras que desejam transmitir autoridade e sofisticação. Com um design focado em UX (User Experience) e conversão, ele utiliza as melhores práticas de desenvolvimento web moderno.

### Principais Funcionalidades

- **Design Responsivo & Mobile-First**: Perfeito em qualquer dispositivo.
- **Animações Fluidas**: Uso de `framer-motion` para transições elegantes e profissionais.
- **Componentes Modulares**: Arquitetura limpa para fácil personalização e manutenção.
- **SEO Otimizado**: Estrutura semântica pronta para indexação.
- **Ícones Modernos**: Integração com `lucide-react`.

## 🚀 Getting Started

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Você precisará ter instalado:
* [Node.js](https://nodejs.org/) (versão 16 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O projeto estará rodando em `http://localhost:5173`.

## 🎨 Personalização

Este template foi construído pensando na customização. Abaixo estão os principais pontos de edição:

### Cores e Estilo
O projeto utiliza **Tailwind CSS**. As cores principais estão definidas no `tailwind.config.js` (se configurado) ou diretamente nas classes utilitárias.
- **Primary Color**: Usada para textos principais e fundos escuros.
- **Accent Color**: Usada para destaques, botões e detalhes (Dourado/Gold por padrão).

### Conteúdo
Todo o conteúdo de texto e imagens pode ser editado diretamente nos componentes localizados em `/components` ou no arquivo de constantes:

- **Dados de Imóveis & Depoimentos**: Edite o arquivo `constants.ts`.
- **Links do Menu**: Edite `components/Navbar.tsx`.
- **Hero & Chamadas**: Edite `components/Hero.tsx`.

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes React reutilizáveis
│   ├── ui/           # Componentes de interface genéricos (botões, seções)
│   ├── Hero.tsx      # Seção principal
│   ├── Navbar.tsx    # Navegação
│   └── ...
├── constants.ts      # Dados mockados (imóveis, depoimentos)
├── types.ts          # Definições de tipos TypeScript
├── App.tsx           # Componente principal
└── main.tsx          # Ponto de entrada
```

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Desenvolvido com ❤️ para elevar o nível do mercado imobiliário.
