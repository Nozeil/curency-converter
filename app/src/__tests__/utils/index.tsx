import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { routes } from '@/router';
import { PATHS } from '@/main.constants';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ReactNode } from 'react';

export function renderWithProvider(component: ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

export function renderWithRouter(initialIndex = 0) {
  const router = createMemoryRouter(routes, {
    initialEntries: [PATHS.CONVERTER, PATHS.CURRENCY, PATHS.NOT_FOUND, '/unknownPath'],
    initialIndex,
  });
  return {
    user: userEvent.setup(),
    ...render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    ),
  };
}
