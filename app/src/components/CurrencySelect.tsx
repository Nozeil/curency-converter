import { useAppDispatch, useAppSelector } from '@/hooks';
import { SUPPORTED_CURRENCIES, TEST_IDS } from '@/main.constants';
import { setSelectedCurrency } from '@/redux/selectedCurrencySlice';
import { FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';

const LABEL = 'Currency';

export function CurrencySelect() {
  const selectedCurrency = useAppSelector((state) => state.userValues.selectedCurrency);
  const dispatch = useAppDispatch();

  const onChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    dispatch(setSelectedCurrency(value));
  };

  return (
    <FormControl sx={{ m: '30px 0' }}>
      <InputLabel id="label">{LABEL}</InputLabel>
      <Select
        data-testid={TEST_IDS.CURRENCY_SELECT}
        inputProps={{ 'data-testid': TEST_IDS.CURRENCY_TEXT_FIELD }}
        onChange={onChange}
        labelId="label"
        label={LABEL}
        value={selectedCurrency}
      >
        {SUPPORTED_CURRENCIES.map((item) => (
          <MenuItem key={item.code} value={item.code}>
            {`${item.code}, ${item.name}, ${item.country}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
