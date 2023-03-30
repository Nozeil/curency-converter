import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserValuesState {
  selectedCurrency: string;
  converterValue: string;
  validationMessage: string;
}

const initialState: UserValuesState = {
  selectedCurrency: 'BYN',
  converterValue: '',
  validationMessage: '',
};

export const userValuesSlice = createSlice({
  name: 'selectedCurrency',
  initialState,
  reducers: {
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload;
    },
    setConverterValue: (state, action: PayloadAction<string>) => {
      state.converterValue = action.payload;
    },
    setValidationMessage: (state, action: PayloadAction<string>) => {
      state.validationMessage = action.payload;
    },
  },
});

export const { setSelectedCurrency, setConverterValue, setValidationMessage } =
  userValuesSlice.actions;

export default userValuesSlice.reducer;
