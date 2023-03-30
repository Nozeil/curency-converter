import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/main.constants';
import type { MenuProps } from '@/main.types';

const sx = { textAlign: 'center', margin: '0 20px 10px', borderRadius: '5px' };

export function MobileNavMenu({ handleDrawerToggle }: MenuProps) {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton component={NavLink} to={item.to} sx={sx}>
              <ListItemText primary={item.primary} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
