import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import { City, OffersList } from '../types/offer';

interface OffersState {
  city: City;
  offers: OffersList;
}

const initialState: OffersState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12,
    },
  },
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
