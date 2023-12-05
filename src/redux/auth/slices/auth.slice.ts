import {createSlice} from '@reduxjs/toolkit';

import {
  loginFunc,
  registerFunc,
  forgotPassword,
  loadUserFunc,
} from '../thunk/auth.thunk';
import storage from '../../../utils/storage';
import {ErrorMessage} from '../../../interface/messages/MessageTypes';

export interface AuthState {
  user: any | null;
  userData: any | null;
  isError: boolean;
  isSuccess: boolean;
  message: string | any;
  isLoading: boolean;
  loading: boolean;
  isVerified?: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  status?: number | null;
  isErrorReset: boolean;
  isSuccessReset: boolean;
  messageReset: string | any;
  isLoadingReset: boolean;
}

const initialState: AuthState = {
  user: {},
  userData: {},
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
  accessToken: 'accessTokenFromStorage',
  refreshToken: '',
  isVerified: false,
  isErrorReset: false,
  isSuccessReset: false,
  messageReset: '',
  isLoadingReset: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    resetAuthState: state => {
      state.user = null;
      state.userData = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.accessToken = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.loading = false;
      storage.remove('@user');
      storage.remove('@token');
    },
    resetIsState: state => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
      state.loading = false;
    },
    resetIsStateReset: state => {
      state.isErrorReset = false;
      state.isLoadingReset = false;
      state.isSuccessReset = false;
      state.messageReset = '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginFunc.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = (action.payload as ErrorMessage)?.message;
      })
      .addCase(loginFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload?.user;
        state.userData = action.payload?.user;
        console.log('hello', action.payload);
        state.accessToken = action.payload?.token;
        state.refreshToken = action.payload?.refresh_token;
        storage.storeInfo('@user', action?.payload?.user);
        storage.storeInfo('@token', action?.payload?.token);
      })
      .addCase(registerFunc.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registerFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = (action.payload as ErrorMessage)?.message;
      })
      .addCase(registerFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload?.user;
        state.userData = action.payload?.user;
        console.log(action.payload);
        state.accessToken = action.payload?.token;
        state.refreshToken = action.payload?.refresh_token;
        storage.storeInfo('@user', action?.payload?.user);
        storage.storeInfo('@token', action?.payload?.token);
      })
      .addCase(forgotPassword.pending, state => {
        state.isLoading = true;
        state.isErrorReset = false;
        state.isSuccessReset = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoadingReset = false;
        state.isErrorReset = true;
        state.messageReset = (action.payload as ErrorMessage)?.message;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.isLoadingReset = false;
        state.isSuccessReset = true;
        state.messageReset = 'Code sent successfully';
      })
      .addCase(loadUserFunc.pending, state => {
        state.loading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loadUserFunc.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.userData = action.payload;
        state.isError = false;
      })
      .addCase(loadUserFunc.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.message = action.error.message || '';
      });
  },
});

export const {
  resetAuthState,
  setUser,
  setToken,
  resetIsState,
  resetIsStateReset,
} = authSlice.actions;
export const getUserState = (state: any) => state.authSlice;
export default authSlice.reducer;
