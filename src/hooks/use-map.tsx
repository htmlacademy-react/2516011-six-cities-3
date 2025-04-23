import { useEffect, useRef, MutableRefObject } from 'react';
import L, { Map } from 'leaflet';
import { CityLocation } from '../types/offer';

export function useMap(mapRef: MutableRefObject<HTMLElement>, location: CityLocation) {
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(mapInstanceRef.current);
    }
  }, [mapRef, location]);

  return mapInstanceRef;
}
