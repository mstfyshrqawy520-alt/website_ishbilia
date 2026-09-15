'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { plotLocationsData, projectsData } from '@/data/projects';

interface LeafletMapInnerProps {
  activePlot: string;
  onSelectPlot: (plotNumber: string) => void;
  zoneFilter: string;
  mapTheme: 'voyager' | 'dark';
}

export default function LeafletMapInner({
  activePlot,
  onSelectPlot,
  zoneFilter,
  mapTheme,
}: LeafletMapInnerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  // Helper to determine zone for filtering
  const getZoneCategory = (plot: string): string => {
    if (['198', '190', '235', '60'].includes(plot)) return '35';
    if (
      [
        '1518',
        '1490',
        '1488',
        '1483',
        '1413',
        '1372',
        '1371',
        '1341',
        '1317',
        '1307',
        '1301',
        '1297',
        '1220',
        '1167',
        '1165',
        '1164',
        '1152',
        '1064',
      ].includes(plot)
    )
      return '21';
    if (
      ['421', '578', '584', '623', '1254', '1378', '1445', '1500'].includes(plot)
    )
      return '14';
    return 'other';
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Center on active plot or general Sadat City center
    const initialLocation = plotLocationsData[activePlot] || {
      lat: 30.401,
      lng: 30.52,
    };

    const map = L.map(mapContainerRef.current, {
      center: [initialLocation.lat, initialLocation.lng],
      zoom: 16,
      zoomControl: false,
    });

    // Zoom control at bottom-right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer when theme changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const tileUrl =
      mapTheme === 'dark'
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const attribution =
      mapTheme === 'dark'
        ? '&copy; <a href="https://carto.com/">CARTO</a>'
        : '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap';

    const newTileLayer = L.tileLayer(tileUrl, {
      attribution,
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [mapTheme]);

  // Create or Update Markers whenever activePlot, zoneFilter, or map changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => {
      map.removeLayer(marker);
    });
    markersRef.current = {};

    const bounds: [number, number][] = [];

    // Loop through all 35 plots in plotLocationsData
    Object.entries(plotLocationsData).forEach(([plotNum, loc]) => {
      const category = getZoneCategory(plotNum);
      if (zoneFilter !== 'all' && category !== zoneFilter) {
        return;
      }

      bounds.push([loc.lat, loc.lng]);
      const isSelected = plotNum === activePlot;

      // Icon HTML
      let iconHtml = '';

      if (isSelected) {
        // ✨ THE BIG ARROW POINTING DIRECTLY DOWN AT THE SELECTED PLOT
        iconHtml = `
          <div class="selected-plot-wrapper" style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); pointer-events: auto; cursor: pointer;">
            <!-- Big Pulsing Arrow -->
            <div class="animate-big-arrow" style="display: flex; flex-direction: column; align-items: center; margin-bottom: 2px;">
              <div style="background: linear-gradient(135deg, #F59E0B, #EAB308); color: #000; font-weight: 900; font-size: 11px; padding: 4px 10px; border-radius: 9999px; box-shadow: 0 0 20px rgba(245, 158, 11, 0.95); border: 2px solid #FFFFFF; white-space: nowrap; display: flex; align-items: center; gap: 4px;">
                <span>👇</span>
                <span>القطعة المحددة: قطعة ${plotNum}</span>
              </div>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style="filter: drop-shadow(0 0 10px rgba(245, 158, 11, 1)); margin-top: -2px;">
                <path d="M12 2v14m0 0l-5-5m5 5l5-5" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="20" r="2.5" fill="#F59E0B"/>
              </svg>
            </div>

            <!-- Glowing Pin with Ping Waves -->
            <div style="position: relative; display: flex; align-items: center; justify-content: center;">
              <div style="position: absolute; width: 48px; height: 48px; border-radius: 9999px; background: rgba(245, 158, 11, 0.5); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
              <div style="background: #F59E0B; color: #090D16; font-weight: 900; font-size: 13px; padding: 4px 14px; border-radius: 9999px; box-shadow: 0 0 25px rgba(245, 158, 11, 0.9); border: 2px solid #FFFFFF; display: flex; align-items: center; gap: 5px; position: relative; z-index: 2;">
                <span>📍</span>
                <span>قطعة ${plotNum}</span>
              </div>
            </div>
          </div>
        `;
      } else {
        // Standard Plot Marker
        iconHtml = `
          <div class="plot-pin-default" style="transform: translate(-50%, -50%); cursor: pointer;">
            <div style="background: rgba(11, 15, 25, 0.92); border: 1.5px solid #D4AF37; color: #D4AF37; font-weight: 800; font-size: 11px; padding: 3px 8px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(0,0,0,0.6); display: flex; align-items: center; gap: 3px; white-space: nowrap; transition: all 0.2s ease;">
              <span style="font-size: 9px;">📍</span>
              <span>${plotNum}</span>
            </div>
          </div>
        `;
      }

      const customIcon = L.divIcon({
        className: 'custom-leaflet-plot-icon',
        html: iconHtml,
        iconSize: [0, 0],
        iconAnchor: [0, isSelected ? 0 : 0],
      });

      const marker = L.marker([loc.lat, loc.lng], {
        icon: customIcon,
        zIndexOffset: isSelected ? 1000 : 10,
      }).addTo(map);

      marker.on('click', () => {
        onSelectPlot(plotNum);
      });

      markersRef.current[plotNum] = marker;
    });

    // Fly to active plot
    if (plotLocationsData[activePlot]) {
      const activeLoc = plotLocationsData[activePlot];
      map.flyTo([activeLoc.lat, activeLoc.lng], 17, {
        duration: 0.8,
      });
    }
  }, [activePlot, zoneFilter, onSelectPlot]);

  return (
    <div className="relative w-full h-full min-h-[480px]">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
    </div>
  );
}
