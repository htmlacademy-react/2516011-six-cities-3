export interface Place {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  image: string;
  isPremium: boolean;
}

export interface City {
  city: string;
  places: Place[];
}
