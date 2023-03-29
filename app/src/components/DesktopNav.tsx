import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { navItems } from '@/main.constants';
import { PropsWithChildren } from 'react';

export function DesktopNav({ children: MenuButton }: PropsWithChildren) {
  return (
    <AppBar component="nav">
      <Toolbar>
        {MenuButton}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item.primary} component={NavLink} to={item.to} sx={{ color: '#fff' }}>
              {item.primary}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
