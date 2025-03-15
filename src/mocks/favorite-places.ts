import { City } from '../types/place';

export const favoritePlaces: City[] = [
  {
    city: 'Amsterdam',
    places: [
      {
        id: 'fb5e29ef-99ee-4170-bf58-1894490a61fc',
        title: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        price: 180,
        rating: 100,
        image: 'img/apartment-small-03.jpg',
        isPremium: true,
      },
      {
        id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
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
        id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
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
