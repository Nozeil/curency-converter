import { currencyApiSlice } from '@/services/currencySlice';
import { configureStore } from '@reduxjs/toolkit';
import selectedCurrencyReducer from './selectedCurrencySlice';

export default configureStore({
  reducer: {
    selectedCurrency: selectedCurrencyReducer,
    [currencyApiSlice.reducerPath]: currencyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApiSlice.middleware),
});
