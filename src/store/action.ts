import { createAction } from '@reduxjs/toolkit';
import { City, OfferShort } from '../types/offer';
import { AuthorizationStatus } from '../utils/const';

export const changeCity = createAction<City>('offers/changeCity');
export const setOffers = createAction<OfferShort[]>('offers/setOffers');
export const setError = createAction<string | null>('offers/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
