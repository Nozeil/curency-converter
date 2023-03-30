import { ERROR_MESSAGES, TEST_IDS } from '@/main.constants';

export function NotFound() {
  return <div data-testid={TEST_IDS.NOT_FOUND_PAGE}>{ERROR_MESSAGES.SERVER}</div>;
}
