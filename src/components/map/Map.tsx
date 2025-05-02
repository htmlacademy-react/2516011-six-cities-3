import { useEffect, useRef, MutableRefObject } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityLocation, BaseOffer } from '../../types/offer';
import { useMap } from '../../hooks/use-map.tsx';

interface MapProps {
  offers: BaseOffer[];
  cityLocation: CityLocation;
  currentOffer?: BaseOffer;
}

const defaultIcon = new L.Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const currentIcon = new L.Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

function Map({ offers, cityLocation, currentOffer }: MapProps) {
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
        const marker = L.marker([latitude, longitude], { icon: defaultIcon })
          .addTo(map)
          .bindPopup(`<b>${offer.title}</b>`);
        markersRef.current.push(marker);
      });

      if (currentOffer) {
        const { latitude, longitude } = currentOffer.location;
        const marker = L.marker([latitude, longitude], { icon: currentIcon })
          .addTo(map)
          .bindPopup(`<b>${currentOffer.title}</b>`);
        markersRef.current.push(marker);
      }
    }
  }, [offers, currentOffer, mapInstanceRef]);

  return <section className="cities__map map" ref={mapRef} style={{ height: '100%' }} />;
}

export default Map;
