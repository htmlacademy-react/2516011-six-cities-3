export interface Place {
  id: number;
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

export const favoritePlaces: City[] = [
  {
    city: 'Amsterdam',
    places: [
      {
        id: 1,
        title: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        price: 180,
        rating: 100,
        image: 'img/apartment-small-03.jpg',
        isPremium: true,
      },
      {
        id: 2,
        title: 'Wood and stone place',
        type: 'Room',
        price: 80,
        rating: 80,
        image: 'img/room-small.jpg',
        isPremium: false,
      },
    ],
  },
  {
    city: 'Cologne',
    places: [
      {
        id: 3,
        title: 'White castle',
        type: 'Apartment',
        price: 180,
        rating: 100,
        image: 'img/apartment-small-04.jpg',
        isPremium: false,
      },
    ],
  },
];
