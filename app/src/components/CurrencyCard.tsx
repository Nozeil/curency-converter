import { useAppSelector } from '@/hooks';
import { CurrentCurency } from '@/main.types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography/Typography';

export function CurrencyCard({ code, country, name, rate }: CurrentCurency) {
  const selectedCurrency = useAppSelector((state) => state.selectedCurrency.value);

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {country}
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2">{`1 ${code} = ${rate} ${selectedCurrency}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
