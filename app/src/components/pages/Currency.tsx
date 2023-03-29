import { SUPPORTED_CURRENCIES } from '@/main.constants';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const LABEL = 'Currency';

function CurrencySelect() {
  return (
    <TextField
      id="outlined-select-currency"
      select
      margin="normal"
      label={LABEL}
      defaultValue="BYN"
    >
      {SUPPORTED_CURRENCIES.map((item) => (
        <MenuItem key={item.code} value={item.code}>
          {`${item.code}, ${item.name}, ${item.country}`}
        </MenuItem>
      ))}
    </TextField>
  );
}

export function Currency() {
  return (
    <section>
      <CurrencySelect />
    </section>
  );
}
