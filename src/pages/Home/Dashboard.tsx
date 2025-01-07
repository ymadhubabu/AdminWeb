import React from 'react';
import { Box, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Container } from '@mui/material';
import Sidenav from './../../Sidenav';

const Dashboard: React.FC = () => {
  const cardData = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
  const table1Data = [
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    { id: 3, name: 'Item 3', value: 'Value 3' },
  ];
  const table2Data = [
    { id: 1, name: 'Item A', value: 'Value A' },
    { id: 2, name: 'Item B', value: 'Value B' },
    { id: 3, name: 'Item C', value: 'Value C' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidenav />
      <Container>

      
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {card}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is {card}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Table 1
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table1Data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Table 2
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table2Data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    </Container>
    </Box>
  );
};

export default Dashboard;
