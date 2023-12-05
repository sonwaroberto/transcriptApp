import {createAsyncThunk} from '@reduxjs/toolkit';
import WalletServices from '../../services/wallet/walletService';

export const addWalletThunk = createAsyncThunk(
  'wallet/addWallet',
  async (body: any, thunkAPI) => {
    try {
      return await new WalletServices().addWalletService(body);
    } catch (error: any) {
      console.log('REQUEST_ERROR: ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeWalletThunk = createAsyncThunk(
  'wallet/removeWallet',
  async (walletId: string, thunkAPI) => {
    try {
      return await new WalletServices().removeWalletService(walletId);
    } catch (error: any) {
      console.log('REQUEST_ERROR: ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getWalletThunk = createAsyncThunk(
  'wallet/getWallet',
  async (walletId: string, thunkAPI) => {
    try {
      return await new WalletServices().getWalletService(walletId);
    } catch (error: any) {
      console.log('REQUEST_ERROR: ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
