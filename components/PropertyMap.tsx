import React, { useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import { FEATURED_PROJECTS, SALES_DETAILS } from '../constants';
import { ProjectDetailsType } from '../types';
import { MapPin } from 'lucide-react';

// Fix default marker icons issue with Leaflet + bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface PropertyMapProps {
  currentPropertyId: string;
  propertyType: 'featured' | 'sales';
  className?: string;
}

interface PropertyWithType extends ProjectDetailsType {
  sourceType: 'featured' | 'sales';
}

// Custom marker icons - Pin style with type-based colors
const createCustomIcon = (isActive: boolean, sourceType: 'featured' | 'sales'): L.DivIcon => {
  const size = isActive ? 48 : 38;
  
  // Colors based on type
  // Lançamentos (featured) = Green
  // Vendas (sales) = Blue
  const colors = {
    featured: { bg: '#059669', border: '#34d399' }, // Emerald/Green
    sales: { bg: '#2563eb', border: '#60a5fa' },    // Blue
  };
  
  const typeColors = colors[sourceType];
  
  // Active property gets golden ring
  const ringStyle = isActive 
    ? `box-shadow: 0 0 0 4px #fbbf24, 0 4px 12px rgba(0,0,0,0.3);` 
    : `box-shadow: 0 4px 12px rgba(0,0,0,0.3);`;
  
  return L.divIcon({
    className: 'custom-marker-icon',
    html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size + 14}px;
      ">
        <div style="
          width: ${size}px;
          height: ${size}px;
          background: ${typeColors.bg};
          border: 3px solid ${typeColors.border};
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          ${ringStyle}
        "></div>
        <div style="
          position: absolute;
          top: ${size * 0.22}px;
          left: ${size * 0.22}px;
          width: ${size * 0.56}px;
          height: ${size * 0.56}px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg 
            width="${size * 0.3}" 
            height="${size * 0.3}" 
            viewBox="0 0 24 24" 
            fill="${typeColors.bg}" 
            stroke="none"
          >
            ${sourceType === 'featured' 
              ? '<path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>' // Building icon
              : '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>' // Home icon
            }
          </svg>
        </div>
      </div>
    `,
    iconSize: [size, size + 14],
    iconAnchor: [size / 2, size + 14],
    popupAnchor: [0, -(size + 10)],
  });
};

// Component to handle marker clustering
const MarkerClusterGroup: React.FC<{
  properties: PropertyWithType[];
  currentPropertyId: string;
}> = ({ properties, currentPropertyId }) => {
  const map = useMap();
  const clusterGroupRef = useRef<L.MarkerClusterGroup | null>(null);

  useEffect(() => {
    if (!map) return;

    // Create marker cluster group with custom styling
    const clusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      disableClusteringAtZoom: 15,
      zoomToBoundsOnClick: false, // We handle this manually
      spiderfyDistanceMultiplier: 1.5,
      animate: true,
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        return L.divIcon({
          html: `
            <div style="
              width: 52px;
              height: 52px;
              background: linear-gradient(135deg, #d97706, #92400e);
              border: 4px solid #fbbf24;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: 700;
              font-size: 18px;
              box-shadow: 0 4px 16px rgba(217, 119, 6, 0.5);
              cursor: pointer;
            ">
              ${count}
            </div>
          `,
          className: 'custom-cluster-icon',
          iconSize: L.point(52, 52),
          iconAnchor: L.point(26, 26),
        });
      },
    });

    // Handle cluster click manually for better centering
    clusterGroup.on('clusterclick', (e: any) => {
      const cluster = e.layer;
      const bounds = cluster.getBounds();
      const center = bounds.getCenter();
      
      // Get current zoom and calculate target zoom
      const currentZoom = map.getZoom();
      const targetZoom = Math.min(currentZoom + 2, 16);
      
      // Zoom to center of cluster bounds
      map.setView(center, targetZoom, {
        animate: true,
        duration: 0.5,
      });
    });

    // Add markers to cluster group
    properties.forEach((property) => {
      if (!property.coordinates) return;

      const isActive = property.id.toUpperCase() === currentPropertyId.toUpperCase();
      const marker = L.marker([property.coordinates.lat, property.coordinates.lng], {
        icon: createCustomIcon(isActive, property.sourceType),
      });

      // Determine route based on source type
      const routePrefix = property.sourceType === 'featured' ? 'empreendimento' : 'vendas';
      
      // Type badge color
      const badgeColor = property.sourceType === 'featured' ? '#059669' : '#2563eb';
      const badgeText = property.sourceType === 'featured' ? 'Lançamento' : 'Venda';
      
      // Create popup content
      const popupContent = `
        <div style="
          min-width: 220px;
          max-width: 280px;
          font-family: system-ui, -apple-system, sans-serif;
          padding: 0;
        ">
          <img 
            src="${property.mainImage}" 
            alt="${property.title}"
            style="
              width: calc(100% + 40px);
              height: 120px;
              object-fit: cover;
              margin: -20px -20px 12px -20px;
              display: block;
            "
          />
          <div style="
            display: inline-block;
            padding: 3px 10px;
            background: ${badgeColor};
            color: white;
            font-size: 10px;
            font-weight: 600;
            border-radius: 4px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">${badgeText}</div>
          <h3 style="
            margin: 0 0 6px 0;
            font-size: 15px;
            font-weight: 600;
            color: #111827;
            line-height: 1.3;
          ">${property.title}</h3>
          <p style="
            margin: 0 0 8px 0;
            font-size: 12px;
            color: #6b7280;
            line-height: 1.4;
          ">${property.location}</p>
          ${property.price ? `
            <p style="
              margin: 0 0 12px 0;
              font-size: 16px;
              font-weight: 700;
              color: #d97706;
            ">${property.price}</p>
          ` : ''}
          <a 
            href="/${routePrefix}/${property.id.toLowerCase()}"
            style="
              display: block;
              padding: 10px 16px;
              background: ${badgeColor};
              color: white;
              text-align: center;
              text-decoration: none;
              border-radius: 8px;
              font-size: 13px;
              font-weight: 600;
            "
          >
            Ver Detalhes
          </a>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        minWidth: 220,
        className: 'custom-property-popup',
        closeButton: true,
        autoPan: true,
        autoPanPadding: L.point(50, 50),
      });

      clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);
    clusterGroupRef.current = clusterGroup;

    // Center on current property with appropriate zoom
    const currentProperty = properties.find(
      p => p.id.toUpperCase() === currentPropertyId.toUpperCase()
    );
    
    if (currentProperty?.coordinates) {
      map.setView(
        [currentProperty.coordinates.lat, currentProperty.coordinates.lng],
        13,
        { animate: true }
      );
    } else if (properties.length > 0) {
      const bounds = clusterGroup.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { 
          padding: [60, 60], 
          maxZoom: 14,
          animate: true 
        });
      }
    }

    return () => {
      clusterGroup.off('clusterclick');
      map.removeLayer(clusterGroup);
    };
  }, [map, properties, currentPropertyId]);

  return null;
};

export const PropertyMap: React.FC<PropertyMapProps> = ({
  currentPropertyId,
  className = '',
}) => {
  // Get ALL properties from both sources
  const properties = useMemo(() => {
    const featuredProperties: PropertyWithType[] = Object.values(FEATURED_PROJECTS)
      .filter((p) => p.coordinates)
      .map((p) => ({ ...p, sourceType: 'featured' as const }));
    
    const salesProperties: PropertyWithType[] = Object.values(SALES_DETAILS)
      .filter((p) => p.coordinates)
      .map((p) => ({ ...p, sourceType: 'sales' as const }));
    
    return [...featuredProperties, ...salesProperties];
  }, []);

  // Calculate center based on current property
  const center = useMemo(() => {
    const fromFeatured = FEATURED_PROJECTS[currentPropertyId.toUpperCase()];
    const fromSales = SALES_DETAILS[currentPropertyId.toUpperCase()];
    const currentProperty = fromFeatured || fromSales;
    
    if (currentProperty?.coordinates) {
      return [currentProperty.coordinates.lat, currentProperty.coordinates.lng] as [number, number];
    }

    return [-16.3281, -48.9534] as [number, number];
  }, [currentPropertyId]);

  if (properties.length === 0) {
    return (
      <div className={`flex items-center justify-center h-[400px] bg-gray-100 rounded-xl ${className}`}>
        <div className="text-center text-gray-500">
          <MapPin size={48} className="mx-auto mb-4 opacity-50" />
          <p>Nenhum imóvel com localização disponível</p>
        </div>
      </div>
    );
  }

  const featuredCount = properties.filter(p => p.sourceType === 'featured').length;
  const salesCount = properties.filter(p => p.sourceType === 'sales').length;

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '450px', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MarkerClusterGroup
          properties={properties}
          currentPropertyId={currentPropertyId}
        />
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 text-gray-800 text-xs z-[1000] shadow-md border border-gray-200">
        <p className="font-semibold text-gray-700 mb-2 text-[11px] uppercase tracking-wide">Legenda</p>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-600 border-2 border-emerald-400" />
            <span>Lançamentos ({featuredCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-400" />
            <span>Vendas ({salesCount})</span>
          </div>
          <div className="flex items-center gap-2 pt-1 border-t border-gray-200 mt-1">
            <div className="w-4 h-4 rounded-full bg-gray-400 ring-2 ring-amber-400 ring-offset-1" />
            <span>Imóvel Atual</span>
          </div>
        </div>
      </div>

      {/* Property count badge */}
      <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1.5 rounded-full text-sm font-medium z-[1000] shadow-lg">
        {properties.length} imóveis
      </div>
    </div>
  );
};

export default PropertyMap;
