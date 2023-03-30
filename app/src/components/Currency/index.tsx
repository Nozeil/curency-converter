import { ERROR_MESSAGES } from '@/main.constants';
import { useGetLatestQuery } from '@/services/currencySlice';
import { useMemo } from 'react';
import { Loader } from '../Loader';
import { Grid, Typography } from '@mui/material';
import { reduceSupportedCurrencies } from './index.utils';
import { CurrencyCard } from '@/components/CurrencyCard';
import { CurrencySelect } from '@/components/CurrencySelect';
import { useAppSelector } from '@/hooks';

export function Currency() {
  const selectedCurrency = useAppSelector((state) => state.userValues.selectedCurrency);
  const { data: currency, isFetching, isSuccess, isError } = useGetLatestQuery(selectedCurrency);

  const generatedCurrencys = useMemo(() => {
    const rates = currency?.conversion_rates;
    return rates ? reduceSupportedCurrencies(rates, selectedCurrency) : [];
  }, [currency, selectedCurrency]);

  let content;

  if (isFetching) {
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
    content = <Typography>{ERROR_MESSAGES.SERVER}</Typography>;
  }

  return (
    <>
      <CurrencySelect />
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {content}
      </Grid>
    </>
  );
}
