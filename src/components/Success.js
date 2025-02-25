// src/components/Success.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Success = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 80 }} />
        <Typography variant="h4" component="div" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your submission has been received.
        </Typography>
      </Box>
    </Container>
  );
};

export default Success;
