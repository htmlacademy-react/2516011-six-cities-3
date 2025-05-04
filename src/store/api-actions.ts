import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { saveToken, dropToken } from '../services/token';
import { OfferShort, OfferFull } from '../types/offer';
import { Comment } from '../types/comment.ts';
import {
  requireAuthorization,
  setUserData,
  setOffers,
  setOffersDataLoadingStatus,
  redirectToRoute,
  setCurrentOfferLoading,
  setOfferNotFound,
  setCurrentOffer,
  setNearbyOffers,
  setComments,
} from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoutes, AuthorizationStatus, AppRoutes } from '../utils/const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OfferShort[]>(APIRoutes.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(setOffers(data));
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
    const {data: {token}} = await api.post<UserData>(APIRoutes.Login, {email, password});
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
    } catch (error) {
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
    const { data } = await api.post<Comment>(`/comments/${offerId}`, { comment, rating });
    const currentComments = getState().comments;
    const updatedComments = [data, ...currentComments];
    dispatch(setComments(updatedComments));
  }
);
