import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import { City, OfferShort } from '../types/offer';
import { cityData } from '../utils/const';
import { offers } from '../mocks/offers';

interface OffersState {
  city: City;
  offers: OfferShort[];
}

const initialState: OffersState = {
  city: cityData['Paris'],
  offers: offers,
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
