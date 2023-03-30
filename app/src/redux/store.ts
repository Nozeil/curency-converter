import { currencyApiSlice } from '@/services/currencySlice';
import { configureStore } from '@reduxjs/toolkit';
import userValuesReducer from './selectedCurrencySlice';

export default configureStore({
  reducer: {
    userValues: userValuesReducer,
    [currencyApiSlice.reducerPath]: currencyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApiSlice.middleware),
});
