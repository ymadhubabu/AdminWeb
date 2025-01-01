import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Welcome to the About Page!
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
