import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { UserData } from '../../types/user-data';

export interface UserState {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUserData(state, action: PayloadAction<UserData | null>) {
      state.userData = action.payload;
    },
  },
});

export const { requireAuthorization, setUserData } = user.actions;
export default user.reducer;
