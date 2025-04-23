import React, { useEffect, useRef, MutableRefObject } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferShort, CityLocation } from '../../types/offer';
import { useMap } from '../../hooks/use-map.tsx';

interface MapProps {
  offers: OfferShort[];
  cityLocation: CityLocation;
}

const Map: React.FC<MapProps> = ({ offers, cityLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useMap(mapRef as MutableRefObject<HTMLElement>, cityLocation);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (map) {
      map.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
    }
  }, [cityLocation, mapInstanceRef]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (map) {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;
        const marker = L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(`<b>${offer.title}</b>`);
        markersRef.current.push(marker);
      });
    }
  }, [offers, mapInstanceRef]);

  return <section className="cities__map map" ref={mapRef} style={{ height: '100%' }} />;
};

export default Map;
