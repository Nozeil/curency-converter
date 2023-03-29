import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import type { MenuProps } from '@/main.types';

export function MenuButton({ handleDrawerToggle }: MenuProps) {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
  );
}
