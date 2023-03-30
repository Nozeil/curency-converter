import { TEST_IDS } from '@/main.constants';
import { renderWithRouter } from './utils';
import { describe, expect, it } from 'vitest';

function testPageAndItContent(PageId: string, initialIndex = 0) {
  const { getByTestId } = renderWithRouter(initialIndex);
  const page = getByTestId(PageId);

  expect(page).toBeInTheDocument();

  if (PageId === TEST_IDS.CONVERTER_PAGE) {
    const textField = getByTestId(TEST_IDS.CONVERTER_TEXT_FIELD);
    expect(textField).toBeInTheDocument();
  }

  if (PageId === TEST_IDS.CURRENCY_PAGE) {
    const textField = getByTestId(TEST_IDS.CURRENCY_PAGE);
    expect(textField).toBeInTheDocument();
  }
}

describe('layout', () => {
  const { CONVERTER_PAGE, CURRENCY_PAGE, NOT_FOUND_PAGE } = TEST_IDS;

  it('should render the converter page', () => {
    testPageAndItContent(CONVERTER_PAGE);
  });

  it('should render the currency page', () => {
    testPageAndItContent(CURRENCY_PAGE, 1);
  });

  it('should render the error page', () => {
    testPageAndItContent(NOT_FOUND_PAGE, 2);
  });

  it('should render the error page', () => {
    testPageAndItContent(NOT_FOUND_PAGE, 3);
  });
});
