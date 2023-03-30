import { Converter } from '@/components/Converter';
import { ERROR_MESSAGES, TEST_IDS } from '@/main.constants';
import { describe, expect, it } from 'vitest';
import { renderWithProvider } from './utils';

const INPUT_TEXTS = {
  LENGTH: 'convert 10 byn in usd',
  AMOUNT_NAN: 'a byn in usd',
  AMOUNT_0: '0 byn in usd',
  PRETEXT: '10 byn a usd',
  VALUES: '10 aaa in bbb',
  VALID: '10 usd in byn',
} as const;

async function submitText(text: string) {
  const { getByTestId, getByText, findByTestId, user } = renderWithProvider(<Converter />);
  const textField = getByTestId(TEST_IDS.CONVERTER_TEXT_FIELD);
  await user.type(textField, text);
  await user.keyboard('[Enter]');
  return { getByText, findByTestId };
}

async function checkInputTextError(text: string, errorMessage: string) {
  const { getByText } = await submitText(text);
  const error = getByText(errorMessage);
  expect(error).toBeInTheDocument();
}

async function checkConvertedValues() {
  const { findByTestId } = await submitText(INPUT_TEXTS.VALID);
  const values = await findByTestId(TEST_IDS.CONVERTED_VALUES);
  expect(values).toBeInTheDocument();
}

describe('converter validation', async () => {
  it('should show length error', async () => {
    await checkInputTextError(INPUT_TEXTS.LENGTH, ERROR_MESSAGES.LENGTH);
  });
  it('should show amount error', async () => {
    await checkInputTextError(INPUT_TEXTS.AMOUNT_NAN, ERROR_MESSAGES.AMOUNT);
  });
  it('should show amount error', async () => {
    await checkInputTextError(INPUT_TEXTS.AMOUNT_0, ERROR_MESSAGES.AMOUNT);
  });
  it('should show pretext error', async () => {
    await checkInputTextError(INPUT_TEXTS.PRETEXT, ERROR_MESSAGES.PRETEXT);
  });
  it('should show values error', async () => {
    await checkInputTextError(INPUT_TEXTS.VALUES, ERROR_MESSAGES.VALUES);
  });
  it('should show converted values', async () => {
    await checkConvertedValues();
  });
});
