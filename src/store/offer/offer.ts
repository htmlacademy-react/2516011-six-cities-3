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
  },
});

export const {
  setCurrentOffer,
  setCurrentOfferLoading,
  setOfferNotFound,
  setNearbyOffers,
  setComments,
} = offer.actions;

export default offer.reducer;
