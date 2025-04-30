import { createReducer } from '@reduxjs/toolkit';
import {changeCity, setOffers, setOffersDataLoadingStatus, requireAuthorization, setUserData} from './action';
import { City, OfferShort } from '../types/offer';
import { AuthorizationStatus } from '../utils/const';
import { cityData } from '../utils/const';
import { UserData } from '../types/user-data';

export interface CityOffersState {
  city: City;
  offers: OfferShort[];
  isOffersDataLoading: boolean;
}

export interface RootState {
  cityOffers: CityOffersState;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: RootState = {
  cityOffers: {
    city: cityData['Paris'],
    offers: [],
    isOffersDataLoading: false,
  },
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
