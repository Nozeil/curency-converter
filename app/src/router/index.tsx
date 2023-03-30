import { Layout } from '@/components/Layout';
import { NotFound } from '@/pages/NotFound';
import { PATHS } from '@/main.constants';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { CurrencyPage } from '@/pages/Currency';
import { ConverterPage } from '@/pages/Converter';

const elems = (
  <Route element={<Layout />} errorElement={<Navigate to={PATHS.NOT_FOUND} />}>
    <Route index path={PATHS.CONVERTER} element={<ConverterPage />} />
    <Route path={PATHS.CURRENCY} element={<CurrencyPage />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
  </Route>
);

export const routes = createRoutesFromElements(elems);

export const router = createBrowserRouter(routes);
