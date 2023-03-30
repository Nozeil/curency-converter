import { TEST_IDS } from '@/main.constants';
import { renderWithRouter } from './utils';
import { describe, expect, it } from 'vitest';

async function testLinkWithClick(linkId: string, pageId: string, initialIndex = 0) {
  const { getByTestId, user } = renderWithRouter(initialIndex);
  const link = getByTestId(linkId);
  await user.click(link);
  const page = getByTestId(pageId);
  expect(page).toBeInTheDocument();
}

describe('nav', async () => {
  const { CONVERTER_LINK, CURRENCY_LINK, CONVERTER_PAGE, CURRENCY_PAGE } = TEST_IDS;

  it('about link should redirect to currency page', async () => {
    await testLinkWithClick(CURRENCY_LINK, CURRENCY_PAGE);
  });
  it('home link should redirect to converter page', async () => {
    await testLinkWithClick(CONVERTER_LINK, CONVERTER_PAGE, 1);
  });
});
