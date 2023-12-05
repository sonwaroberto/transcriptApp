import {createSlice} from '@reduxjs/toolkit';
import {
  addWalletThunk,
  removeWalletThunk,
  getWalletThunk,
} from './wallet.thunk';

export interface WalletState {
  walletData: any;
  isError: boolean;
  isSuccess: boolean;
  message: string | any;
  isLoading: boolean;
}

const initialState: WalletState = {
  walletData: {},
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
};

const walletSlice = createSlice({
  name: 'walletSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addWalletThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(addWalletThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(addWalletThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletData = action.payload;
      })
      .addCase(removeWalletThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(removeWalletThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(removeWalletThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletData = action.payload;
      })
      .addCase(getWalletThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getWalletThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getWalletThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletData = action.payload;
      });
  },
});

export const getWalletState = (state: any) => state.walletSlice;
export default walletSlice.reducer;
