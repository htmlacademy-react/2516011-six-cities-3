import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setUserData,
  setCurrentOffer,
  setCurrentOfferLoading,
  setOfferNotFound,
  setNearbyOffers,
  setComments,
} from './action';
import { City, OfferFull, OfferShort } from '../types/offer';
import { AuthorizationStatus } from '../utils/const';
import { cityData } from '../utils/const';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment.ts';

export interface CityOffersState {
  city: City;
  offers: OfferShort[];
  isOffersDataLoading: boolean;
}

export interface RootState {
  cityOffers: CityOffersState;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  currentOffer: OfferFull | null;
  nearbyOffers: OfferShort[];
  isCurrentOfferLoading: boolean;
  isOfferNotFound: boolean;
  comments: Comment[];
  isCommentSending: boolean;
}

const initialState: RootState = {
  cityOffers: {
    city: cityData['Paris'],
    offers: [],
    isOffersDataLoading: false,
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  currentOffer: null,
  nearbyOffers: [],
  isCurrentOfferLoading: false,
  isOfferNotFound: false,
  comments: [],
  isCommentSending: false,
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
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setCurrentOfferLoading, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOfferNotFound, (state, action) => {
      state.isOfferNotFound = action.payload;
    });
});

export { reducer };
