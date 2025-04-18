import { OfferFull } from '../types/offer.ts';
import { addIdToImages } from '../utils/imageUtils';

export const fullOffers: OfferFull[] = [
  {
    id: 'fb5e29ef-99ee-4170-bf58-1894490a61fc',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 468,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    description: 'A beautiful waterfront apartment with an extraordinary view.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Washer', 'Dishwasher'],
    host: {
      name: 'Alice Johnson',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images: addIdToImages([
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ]),
    maxAdults: 4,
  },
  {
    id: '6d5ce084-9b00-4350-8286-81378e6860ca',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 140,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3,
    description: 'A compact yet stylish flat located in the heart of Paris.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air conditioning', 'Kitchen'],
    host: {
      name: 'John Doe',
      avatarUrl: 'img/avatar-john.jpg',
      isPro: false,
    },
    images: addIdToImages([
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ]),
    maxAdults: 2,
  },
  {
    id: 'd382ec70-2174-449d-86dd-48be54ed1630',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 270,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.3,
    description: 'A rustic-style hotel built with wood and stone, offering a cozy stay.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Fireplace', 'Kitchen', 'Heating'],
    host: {
      name: 'Emma Brown',
      avatarUrl: 'img/avatar-emma.jpg',
      isPro: true,
    },
    images: addIdToImages([
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ]),
    maxAdults: 3,
  },
  {
    id: 'f929b9e0-f864-4f68-8734-ea1420ef1325',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'hotel',
    price: 230,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    description: 'A luxurious apartment with stylish interior design and great location.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Kitchen', 'Balcony', 'Air conditioning'],
    host: {
      name: 'Carlos Fernandez',
      avatarUrl: 'img/avatar-carlos.jpg',
      isPro: false,
    },
    images: addIdToImages([
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ]),
    maxAdults: 5,
  },
  {
    id: 'de4d048a-bd19-467f-9305-c7523b3ac858',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 605,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3709553943508,
        longitude: 4.914309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.914309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    description: 'A spacious central flat with high-end amenities and modern design.',
    bedrooms: 4,
    goods: ['Wi-Fi', 'Private terrace', 'Kitchen', 'Heating'],
    host: {
      name: 'Marco Rossi',
      avatarUrl: 'img/avatar-marco.jpg',
      isPro: true,
    },
    images: addIdToImages([
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ]),
    maxAdults: 6,
  },
];
