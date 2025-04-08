import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, location: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom,
      });

      const tileLayer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      mapInstance.addLayer(tileLayer);

      setMap(mapInstance);

      return () => {
        mapInstance.remove();
      };
    }
  }, [mapRef, location]);

  return map;
}

export default useMap;
