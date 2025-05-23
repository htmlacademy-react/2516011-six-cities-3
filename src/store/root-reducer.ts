import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import user from './user/user';
import offer from './offer/offer';
import cityOffers from './city-offers/city-offers';

export const rootReducer = combineReducers({
  [NameSpace.User]: user,
  [NameSpace.Offer]: offer,
  [NameSpace.CityOffers]: cityOffers,
});
