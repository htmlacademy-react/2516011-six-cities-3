import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../utils/const';

export const redirectToRoute = createAction<AppRoutes>('user/redirectToRoute');
