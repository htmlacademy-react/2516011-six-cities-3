import { NameSpace } from '../../utils/const';
import { State } from '../../types/state';
import { City, OfferShort } from '../../types/offer';

export const getCity = (state: State): City =>
  state[NameSpace.CityOffers].city;
export const getOffers = (state: State): OfferShort[] =>
  state[NameSpace.CityOffers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.CityOffers].isOffersDataLoading;
