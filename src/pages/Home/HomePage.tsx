import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Sidenav from './../../Sidenav';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidenav />
      <Container maxWidth="sm">
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Home Page!
          </Typography>
          <Typography variant="body1">
            This is the home page content.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
