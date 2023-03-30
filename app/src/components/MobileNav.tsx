import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { PropsWithChildren } from 'react';

interface Props {
  isMobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const sx = {
  display: { xs: 'block', sm: 'none' },
  '& .MuiDrawer-paper': { boxSizing: 'border-box', justifyContent: 'center', width: 240 },
} as const;

export function MobileNav({
  isMobileOpen,
  handleDrawerToggle,
  children: NavMenu,
}: PropsWithChildren<Props>) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={sx}
      >
        {NavMenu}
      </Drawer>
    </Box>
  );
}
