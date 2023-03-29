import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { navItems } from '@/main.constants';
import type { MenuProps } from '@/main.types';

export function MobileNavMenu({ handleDrawerToggle }: MenuProps) {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton component={NavLink} to={item.to} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.primary} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
