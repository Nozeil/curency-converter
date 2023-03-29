import { SUPPORTED_CURRENCIES } from '@/main.constants';

export interface ConversationRequestParams {
  from: string;
  to: string;
  amount: string;
}

interface Response {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
}
export interface ConversationResponse extends Response {
  target_code: string;
  conversion_rate: number;
  conversion_result: number;
}

const keys = SUPPORTED_CURRENCIES.map((item) => item.code);

export type ConversionRates = { [key in (typeof keys)[number]]: number };

export interface CurrencyResponse extends Response {
  conversion_rates: ConversionRates;
}
