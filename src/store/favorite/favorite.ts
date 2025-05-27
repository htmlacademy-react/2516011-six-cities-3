import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { OfferShort } from '../../types/offer';

interface FavoriteState {
  favorites: OfferShort[];
  isFavoritesLoading: boolean;
}

const initialState: FavoriteState = {
  favorites: [],
  isFavoritesLoading: false,
};

export const favorite = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<OfferShort[]>) {
      state.favorites = action.payload;
    },
    setFavoritesLoading(state, action: PayloadAction<boolean>) {
      state.isFavoritesLoading = action.payload;
    },
    setFavoriteStatus(state, action: PayloadAction<OfferShort>) {
      const updatedOffer = action.payload;

      if (updatedOffer.isFavorite) {
        const exists = state.favorites.some((o) => o.id === updatedOffer.id);
        if (!exists) {
          state.favorites.push(updatedOffer);
        } else {
          state.favorites = state.favorites.map((o) =>
            o.id === updatedOffer.id ? updatedOffer : o
          );
        }
      } else {
        state.favorites = state.favorites.filter((o) => o.id !== updatedOffer.id);
      }
    }
  },
});

export const { setFavorites, setFavoritesLoading } = favorite.actions;
export const favoriteActions = favorite.actions;
