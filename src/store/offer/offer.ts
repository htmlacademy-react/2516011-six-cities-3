import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { OfferFull, OfferShort } from '../../types/offer';
import { Comment } from '../../types/comment';

export interface OfferState {
  currentOffer: OfferFull | null;
  nearbyOffers: OfferShort[];
  isCurrentOfferLoading: boolean;
  isOfferNotFound: boolean;
  comments: Comment[];
}

const initialState: OfferState = {
  currentOffer: null,
  nearbyOffers: [],
  isCurrentOfferLoading: false,
  isOfferNotFound: false,
  comments: [],
};

export const offer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setCurrentOffer(state, action: PayloadAction<OfferFull | null>) {
      state.currentOffer = action.payload;
    },
    setCurrentOfferLoading(state, action: PayloadAction<boolean>) {
      state.isCurrentOfferLoading = action.payload;
    },
    setOfferNotFound(state, action: PayloadAction<boolean>) {
      state.isOfferNotFound = action.payload;
    },
    setNearbyOffers(state, action: PayloadAction<OfferShort[]>) {
      state.nearbyOffers = action.payload;
    },
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
    setFavoriteStatus(state, action: PayloadAction<{ id: string; isFavorite: boolean }>) {
      if (state.currentOffer?.id === action.payload.id) {
        state.currentOffer.isFavorite = action.payload.isFavorite;
      }

      state.nearbyOffers = state.nearbyOffers.map((nearbyOffer) =>
        nearbyOffer.id === action.payload.id
          ? { ...nearbyOffer, isFavorite: action.payload.isFavorite }
          : nearbyOffer
      );
    }
  },
});

export const {
  setCurrentOffer,
  setCurrentOfferLoading,
  setOfferNotFound,
  setNearbyOffers,
  setComments,
  setFavoriteStatus
} = offer.actions;

export default offer.reducer;
