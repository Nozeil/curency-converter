import { Converter } from '@/components/Converter';
import { CODES } from '@/main.constants';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function ConverterPage() {
  return (
    <Grid container component="section" flexDirection="column" gap={1}>
      <Grid item textAlign="left">
        <Typography variant="h6">
          In order to convert the currency you need to perform only two actions:
        </Typography>
        <Typography variant="body1">Enter the text in the format 15 rub in usd.</Typography>
        <Typography variant="body1">Press Enter</Typography>
      </Grid>
      <Grid item>
        <Converter />
        <Typography variant="body1">Available Codes: {CODES.join(' ')}</Typography>
      </Grid>
    </Grid>
  );
}
