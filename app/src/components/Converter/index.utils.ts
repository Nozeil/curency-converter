import { ERROR_MESSAGES, SUPPORTED_CURRENCIES } from '@/main.constants';
import { createCodes } from '@/utils';

export function amountIsNaN(amount: number) {
  return Number.isNaN(amount);
}

export function generateCurrenciesCodes() {
  return SUPPORTED_CURRENCIES.map((item) => item.code);
}

export function areSupportedCurrencies(fromCode: string, toCode: string) {
  const codes = generateCurrenciesCodes();
  const isFrom = codes.includes(fromCode);
  const isTo = codes.includes(toCode);

  return isFrom && isTo;
}

export function validateInput(value: string[]) {
  const defaultResult = { isValid: true, message: '' };

  if (value.length === 4) {
    const [amount, from, pretext, to] = value;
    const numAmount = +amount;

    if (amountIsNaN(numAmount) || !numAmount) {
      return { isValid: false, message: ERROR_MESSAGES.AMOUNT };
    }

    if (pretext !== 'in') {
      return { isValid: false, message: ERROR_MESSAGES.PRETEXT };
    }

    if (from.length !== 3 || to.length !== 3) {
      return { isValid: false, message: ERROR_MESSAGES.VALUES };
    } else {
      const { fromCode, toCode } = createCodes(from, to);

      if (!areSupportedCurrencies(fromCode, toCode)) {
        return { isValid: false, message: ERROR_MESSAGES.VALUES };
      }
    }
  } else {
    return { isValid: false, message: ERROR_MESSAGES.LENGTH };
  }

  return defaultResult;
}
