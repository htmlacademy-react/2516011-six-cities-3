export interface CityLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: CityLocation;
}

export interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

interface Image {
  id: string;
  url: string;
}

export interface BaseOffer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: CityLocation;
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
  images: Image[];
  maxAdults: number;
}

export type OffersList = OfferShort[];
