import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedCurrencyState {
  value: string;
}

const initialState: SelectedCurrencyState = {
  value: 'BYN',
};

export const selectedCurrencySlice = createSlice({
  name: 'selectedCurrency',
  initialState,
  reducers: {
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedCurrency } = selectedCurrencySlice.actions;

export default selectedCurrencySlice.reducer;
