import { SUPPORTED_CURRENCIES } from '@/main.constants';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { defaultCurrency } from './pages/Currency';

const LABEL = 'Currency';

export function CurrencySelect() {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label={LABEL}
      defaultValue={defaultCurrency}
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
