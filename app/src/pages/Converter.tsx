import { Converter } from '@/components/Converter';
import Typography from '@mui/material/Typography';

export function ConverterPage() {
  return (
    <section>
      <Typography component="h3">Enter text in the format 15 rub in usd</Typography>
      <Converter />
    </section>
  );
}
