import { useAppDispatch, useAppSelector } from '@/hooks';
import { SUPPORTED_CURRENCIES } from '@/main.constants';
import { setSelectedCurrency } from '@/redux/selectedCurrencySlice';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const LABEL = 'Currency';

export function CurrencySelect() {
  const selectedCurrency = useAppSelector((state) => state.selectedCurrency.value);
  const dispatch = useAppDispatch();

  const onChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    dispatch(setSelectedCurrency(value));
  };

  return (
    <TextField
      id="outlined-select-currency"
      select
      SelectProps={{
        onChange,
      }}
      label={LABEL}
      value={selectedCurrency}
      sx={{ m: '30px 0' }}
    >
      {SUPPORTED_CURRENCIES.map((item) => (
        <MenuItem key={item.code} value={item.code}>
          {`${item.code}, ${item.name}, ${item.country}`}
        </MenuItem>
      ))}
    </TextField>
  );
}
