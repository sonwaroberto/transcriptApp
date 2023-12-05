import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  LoginDataType,
  RegisterDataType,
} from '../../../interface/auth/AuthTypes';
import {handleErrorMessages} from '../../../utils/HandleRequestErrors';
import AuthSerivces from '../../../services/auth/AuthServices';

export const loginFunc = createAsyncThunk(
  'auth/login',
  async (data: LoginDataType, thunkAPI) => {
    try {
      return await new AuthSerivces().loginService(data);
    } catch (error: any) {
      console.log('REQUEST_ERROR: ', error);
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);

export const registerFunc = createAsyncThunk(
  'auth/signup',
  async (data: RegisterDataType, thunkAPI) => {
    try {
      return await new AuthSerivces().registerService(data);
    } catch (error: any) {
      console.log('REQUEST_ERROR: ', error);
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'users/forgot-password',
  async (data: {matricule: string}, thunkAPI) => {
    try {
      return await new AuthSerivces().forgotPasswordService(data);
    } catch (error: any) {
      console.log('REQUEST_ERROR: ', error);
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);

export const loadUserFunc = createAsyncThunk('auth/authuser', async () => {
  return await new AuthSerivces().loadUserService();
});
