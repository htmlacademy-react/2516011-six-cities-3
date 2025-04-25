import { createAction } from '@reduxjs/toolkit';
import { City, OfferShort } from '../types/offer';

export const changeCity = createAction<City>('offers/changeCity');
export const setOffers = createAction<OfferShort[]>('offers/setOffers');
export const setError = createAction<string | null>('offers/setError');
