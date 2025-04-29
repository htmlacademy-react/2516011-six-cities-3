import { createReducer } from '@reduxjs/toolkit';
import {changeCity, setError, setOffers, setOffersDataLoadingStatus, requireAuthorization} from './action';
import { City, OfferShort } from '../types/offer';
import { AuthorizationStatus } from '../utils/const';
import { cityData } from '../utils/const';

interface OffersState {
  city: City;
  offers: OfferShort[];
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  error: string | null;
}

const initialState: OffersState = {
  city: cityData['Paris'],
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
