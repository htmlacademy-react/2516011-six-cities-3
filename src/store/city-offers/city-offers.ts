import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, OfferShort } from '../../types/offer';
import { NameSpace, cityData } from '../../utils/const';

export interface CityOffersState {
  city: City;
  offers: OfferShort[];
  isOffersDataLoading: boolean;
}

const initialState: CityOffersState = {
  city: cityData['Paris'],
  offers: [],
  isOffersDataLoading: false,
};

export const cityOffers = createSlice({
  name: NameSpace.CityOffers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setOffers: (state, action: PayloadAction<OfferShort[]>) => {
      state.offers = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    },
    setFavoriteStatus(state, action: PayloadAction<{ id: string; isFavorite: boolean }>) {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload.id
          ? { ...offer, isFavorite: action.payload.isFavorite }
          : offer
      );
    }
  },
});

export const { changeCity, setOffers, setOffersDataLoadingStatus, setFavoriteStatus } = cityOffers.actions;
export default cityOffers.reducer;
