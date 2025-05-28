import { NameSpace } from '../../utils/const';
import { State } from '../../types/state';
import { OfferShort, CityLocation } from '../../types/offer';

export const getOffers = (state: State): OfferShort[] =>
  state[NameSpace.CityOffers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.CityOffers].isOffersDataLoading;
export const getCityName = (state: State): string =>
  state[NameSpace.CityOffers].city.name;
export const getCityLocation = (state: State): CityLocation =>
  state[NameSpace.CityOffers].city.location;
