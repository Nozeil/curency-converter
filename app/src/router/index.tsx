import { Layout } from '@/components/Layout';
import { Converter } from '@/components/pages/Converter';
import { Currency } from '@/components/pages/Currency';
import { NotFound } from '@/components/pages/NotFound';
import { PATHS } from '@/main.constants';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

const elems = (
  <Route element={<Layout />} errorElement={<Navigate to={PATHS.NOT_FOUND} />}>
    <Route index path={PATHS.CONVERTER} element={<Converter />} />
    <Route path={PATHS.CURRENCY} element={<Currency />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
  </Route>
);

const routes = createRoutesFromElements(elems);

export const router = createBrowserRouter(routes);
