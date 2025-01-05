import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from './assets/images/mitradirect.jpg';

import { Link } from 'react-router-dom';

const Sidenav: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box sx={{ width: 250 }}>

        <img src={logo} alt="Home" style={{ width: "100%" }} />
        <List>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton component={Link} to="/logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidenav;
