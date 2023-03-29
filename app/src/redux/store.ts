import { currencyApiSlice } from '@/services/currencySlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    [currencyApiSlice.reducerPath]: currencyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApiSlice.middleware),
});
