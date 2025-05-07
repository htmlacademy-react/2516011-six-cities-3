import { OfferShort } from '../types/offer';
import { SortOptions } from './const';

export function sortOffers(offers: OfferShort[], sortType: SortOptions): OfferShort[] {
  switch (sortType) {
    case SortOptions.PriceLowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortOptions.PriceHighToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortOptions.TopRatedFirst:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
