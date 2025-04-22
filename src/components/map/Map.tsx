import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferShort } from '../../types/offer';
import useMap from '../../hooks/use-map';

interface MapProps {
  offers: OfferShort[];
}

const Map: React.FC<MapProps> = ({ offers }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const cityLocation = offers[0].city.location;
  const map = useMap(mapRef as React.MutableRefObject<HTMLElement>, cityLocation);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(`<b>${offer.title}</b>`);
      });
    }
  }, [offers, map]);

  return <section className="cities__map map" ref={mapRef} style={{ height: '100%' }} />;
};

export default Map;
