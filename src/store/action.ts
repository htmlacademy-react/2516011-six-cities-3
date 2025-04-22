import { createAction } from '@reduxjs/toolkit';
import { City, OffersList } from '../types/offer';

export const changeCity = createAction<City>('offers/changeCity');
export const setOffers = createAction<OffersList>('offers/setOffers');
