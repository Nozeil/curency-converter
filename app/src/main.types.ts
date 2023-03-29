export interface MenuProps {
  handleDrawerToggle: () => void;
}

export interface CurrentCurency {
  code: string;
  name: string;
  country: string;
  rate: number;
}
