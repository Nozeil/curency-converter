import { SUPPORTED_CURRENCIES } from '@/main.constants';
import { CurrentCurency } from '@/main.types';
import { ConversionRates } from '@/models/currency';

export function convertRate(rate: number) {
  return +(1 / rate).toFixed(4);
}

export function reduceSupportedCurrencies(rates: ConversionRates, defaultCurrency: string) {
  return SUPPORTED_CURRENCIES.reduce<CurrentCurency[]>((acc, curr) => {
    const rate = convertRate(rates[curr.code]);
    if (curr.code !== defaultCurrency) {
      acc.push({
        ...curr,
        rate,
      });
    }
    return acc;
  }, []);
}
