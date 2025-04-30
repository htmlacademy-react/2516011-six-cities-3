import { createReducer } from '@reduxjs/toolkit';
import {changeCity, setError, setOffers, setOffersDataLoadingStatus, requireAuthorization, setUserData} from './action';
import { City, OfferShort } from '../types/offer';
import { AuthorizationStatus } from '../utils/const';
import { cityData } from '../utils/const';
import { UserData } from '../types/user-data';

export interface CityOffersState {
  city: City;
  offers: OfferShort[];
  isOffersDataLoading: boolean;
}

export interface AuthorizationState {
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

export interface RootState {
  cityOffers: CityOffersState;
  authorization: AuthorizationState;
  userData: UserData | null;
}

const initialState: RootState = {
  cityOffers: {
    city: cityData['Paris'],
    offers: [],
    isOffersDataLoading: false,
  },
  authorization: {
    authorizationStatus: AuthorizationStatus.Unknown,
    error: null,
  },
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityOffers.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.cityOffers.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.cityOffers.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.authorization.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorization.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
