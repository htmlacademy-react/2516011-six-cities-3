import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { saveToken, dropToken } from '../services/token';
import { OfferShort, OfferFull } from '../types/offer';
import { Comment } from '../types/comment';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoutes, AuthorizationStatus, AppRoutes } from '../utils/const';

import { setFavoriteStatus as setCityFavoriteStatus, setOffers, setOffersDataLoadingStatus, } from './city-offers/city-offers';
import {favoriteActions, setFavorites, setFavoritesLoading, setHasFavoritesBeenLoaded} from './favorite/favorite.ts';
import {
  requireAuthorization,
  setUserData
} from './user/user';
import {
  setCurrentOfferLoading,
  setOfferNotFound,
  setCurrentOffer,
  setNearbyOffers,
  setComments,
  setFavoriteStatus as setOfferFavoriteStatus,
} from './offer/offer';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    try {
      const { data } = await api.get<OfferShort[]>(APIRoutes.Offers);
      dispatch(setOffers(data));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: userData } = await api.get<UserData>(APIRoutes.Login);
      dispatch(setUserData(userData));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserData(null));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoutes.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(checkAuthAction());
    dispatch(redirectToRoute(AppRoutes.MAIN));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export const fetchOfferById = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchById',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setCurrentOfferLoading(true));
      dispatch(setOfferNotFound(false));
      const { data } = await api.get<OfferFull>(`/offers/${offerId}`);
      dispatch(setCurrentOffer(data));
    } catch {
      dispatch(setOfferNotFound(true));
    } finally {
      dispatch(setCurrentOfferLoading(false));
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchNearby',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setCurrentOfferLoading(true));
    const { data } = await api.get<OfferShort[]>(`/offers/${offerId}/nearby`);
    dispatch(setCurrentOfferLoading(false));
    dispatch(setNearbyOffers(data));
  }
);

export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(`/comments/${offerId}`);
    dispatch(setComments(data));
  }
);

type SendCommentPayload = {
  offerId: string;
  comment: string;
  rating: number;
};

export const postComment = createAsyncThunk<void, SendCommentPayload, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async ({ offerId, comment, rating }, { dispatch, extra: api, getState }) => {
    const { data } = await api.post<Comment>(`${APIRoutes.Comments}/${offerId}`, { comment, rating });
    const currentComments = getState().offer.comments;
    const updatedComments = [data, ...currentComments];
    dispatch(setComments(updatedComments));
  }
);

export const toggleFavoriteStatus = createAsyncThunk<
  OfferShort,
  { offerId: string; status: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/toggleFavoriteStatus',
  async ({ offerId, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<OfferShort>(`${APIRoutes.Favorite}/${offerId}/${status ? 1 : 0}`);
    dispatch(setCityFavoriteStatus({ id: data.id, isFavorite: data.isFavorite }));
    dispatch(setOfferFavoriteStatus({ id: data.id, isFavorite: data.isFavorite }));
    dispatch(favoriteActions.setFavoriteStatus(data));
    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<
  OfferShort[],
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'favorite/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFavoritesLoading(true));
    try {
      const { data } = await api.get<OfferShort[]>(APIRoutes.Favorite);
      dispatch(setFavorites(data));
      dispatch(setHasFavoritesBeenLoaded(true));
      return data;
    } catch (error) {
      dispatch(setHasFavoritesBeenLoaded(true));
      throw error;
    } finally {
      dispatch(setFavoritesLoading(false));
    }
  }
);
