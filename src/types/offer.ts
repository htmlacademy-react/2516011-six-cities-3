export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface BaseOffer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface OfferShort extends BaseOffer {
  previewImage: string;
}

export interface OfferFull extends BaseOffer {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type OffersList = OfferShort[];
