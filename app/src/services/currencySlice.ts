import { CurrencyResponse } from '@/models/currency';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const KEY = '43bdd2c47cb82eda969d85a0';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${KEY}/`;

export const currencyApiSlice = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getLatest: builder.query<CurrencyResponse, string>({
      query: (currency) => `/latest/${currency}`,
    }),
  }),
});

export const { useGetLatestQuery } = currencyApiSlice;
