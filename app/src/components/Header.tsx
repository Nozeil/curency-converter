import Box from '@mui/material/Box';
import { useState } from 'react';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import { MenuButton } from './MenuButton';
import { MobileNavMenu } from './MobileNavMenu';

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevState) => !prevState);
  };

  return (
    <Box component="header" sx={{ display: 'flex' }}>
      <DesktopNav>
        <MenuButton handleDrawerToggle={handleDrawerToggle} />
      </DesktopNav>
      <MobileNav isMobileOpen={isMobileOpen} handleDrawerToggle={handleDrawerToggle}>
        <MobileNavMenu handleDrawerToggle={handleDrawerToggle} />
      </MobileNav>
    </Box>
  );
}
