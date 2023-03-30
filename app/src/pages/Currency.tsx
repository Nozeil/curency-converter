import { Currency } from '@/components/Currency';
import { TEST_IDS } from '@/main.constants';

export function CurrencyPage() {
  return (
    <section data-testid={TEST_IDS.CURRENCY_PAGE}>
      <Currency />
    </section>
  );
}
