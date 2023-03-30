import { Currency } from '@/components/Currency';
import { SUPPORTED_CURRENCIES, TEST_IDS } from '@/main.constants';
import { getByRole, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProvider } from './utils';
import { screen } from '@testing-library/react';

describe('currency', async () => {
  it('textfield initial value should be BYN', async () => {
    const { getByTestId } = renderWithProvider(<Currency />);
    const textField = getByTestId(TEST_IDS.CURRENCY_TEXT_FIELD) as HTMLInputElement;
    expect(textField.value).toBe('BYN');
  });
  it('should render cards with initial value', async () => {
    const { getByTestId, findAllByTestId } = renderWithProvider(<Currency />);
    const loader = getByTestId(TEST_IDS.LOADER);
    expect(loader).toBeInTheDocument();
    const cards = await findAllByTestId(TEST_IDS.CURRENCY_CARD);
    expect(cards.length).not.toBeFalsy();
  });
  it('should render cards with changed value', async () => {
    const { getByTestId, findAllByTestId, user, getByText } = renderWithProvider(<Currency />);
    const select = getByRole(screen.getByTestId(TEST_IDS.CURRENCY_SELECT), 'button');
    await user.click(select);
    const dirham = SUPPORTED_CURRENCIES[0];
    const regExString = `${dirham.code}, ${dirham.name}, ${dirham.country}`;
    const regEx = new RegExp(regExString, 'i');
    await waitFor(() => user.click(getByText(regEx)));
    const loader = getByTestId(TEST_IDS.LOADER);
    expect(loader).toBeInTheDocument();
    const cards = await findAllByTestId(TEST_IDS.CURRENCY_CARD);
    expect(cards.length).not.toBeFalsy();
  });
});
