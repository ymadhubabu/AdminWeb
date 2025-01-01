import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Sidenav: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box sx={{ width: 250 }}>
        <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
          My App
        </Typography>
        <List>
          <ListItemButton component={Link} to="/home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to="/profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidenav;
