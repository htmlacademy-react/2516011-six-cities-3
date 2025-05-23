import { NameSpace } from '../../utils/const';
import { State } from '../../types/state';
import { OfferFull, OfferShort } from '../../types/offer';
import { Comment } from '../../types/comment';

export const getCurrentOffer = (state: State): OfferFull | null =>
  state[NameSpace.Offer].currentOffer;
export const getIsCurrentOfferLoading = (state: State): boolean =>
  state[NameSpace.Offer].isCurrentOfferLoading;
export const getIsOfferNotFound = (state: State): boolean =>
  state[NameSpace.Offer].isOfferNotFound;
export const getNearbyOffers = (state: State): OfferShort[] =>
  state[NameSpace.Offer].nearbyOffers;
export const getComments = (state: State): Comment[] =>
  state[NameSpace.Offer].comments;
