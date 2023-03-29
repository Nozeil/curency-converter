import { ERROR_MESSAGES } from '@/main.constants';
import { useGetLatestQuery } from '@/services/currencySlice';
import { useMemo } from 'react';
import { Loader } from '../../Loader';
import { Grid } from '@mui/material';
import { reduceSupportedCurrencies } from './index.utils';
import { CurrencyCard } from '@/components/CurrencyCard';
import { CurrencySelect } from '@/components/CurrencySelect';

export const defaultCurrency = 'BYN';

export function Currency() {
  const { data: currency, isLoading, isSuccess, isError } = useGetLatestQuery(defaultCurrency);

  const generatedCurrencys = useMemo(() => {
    const rates = currency?.conversion_rates;
    return rates ? reduceSupportedCurrencies(rates, defaultCurrency) : [];
  }, [currency]);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = generatedCurrencys.map((currency) => (
      <CurrencyCard
        key={currency.code}
        code={currency.code}
        country={currency.country}
        name={currency.name}
        rate={currency.rate}
      />
    ));
  } else if (isError) {
    content = ERROR_MESSAGES.SERVER;
  }

  return (
    <section>
      <CurrencySelect />
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {content}
      </Grid>
    </section>
  );
}
