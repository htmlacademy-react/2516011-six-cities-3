import { createAction } from '@reduxjs/toolkit';
import { City, OfferFull, OfferShort } from '../types/offer';
import { AppRoutes, AuthorizationStatus } from '../utils/const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<City>('offers/changeCity');
export const setOffers = createAction<OfferShort[]>('offers/setOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserData = createAction<UserData | null>('user/setUserData');
export const redirectToRoute = createAction<AppRoutes>('user/redirectToRoute');

export const setCurrentOffer = createAction<OfferFull>('offer/setCurrentOffer');
export const setCurrentOfferLoading = createAction<boolean>('offer/setCurrentOfferLoading');
export const setNearbyOffers = createAction<OfferShort[]>('offer/setNearbyOffers');
