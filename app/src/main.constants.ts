export const PATHS = {
  CONVERTER: '/',
  CURRENCY: 'currency',
  NOT_FOUND: 'notFound',
} as const;

export const navItems = [
  { to: PATHS.CONVERTER, primary: 'Converter' },
  { to: PATHS.CURRENCY, primary: 'Currency' },
] as const;
