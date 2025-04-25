import { createReducer } from '@reduxjs/toolkit';
import {changeCity, setError, setOffers} from './action';
import { City, OfferShort } from '../types/offer';
import { cityData } from '../utils/const';

interface OffersState {
  city: City;
  offers: OfferShort[];
  error: string | null;
}

const initialState: OffersState = {
  city: cityData['Paris'],
  offers: [],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
