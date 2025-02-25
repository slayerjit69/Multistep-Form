// src/components/Confirmation.js
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Container,
  Box,
} from '@mui/material';

const Confirmation = ({ formData, prevStep, submitForm }) => {
  const { name, age, gender, email, phone, address } = formData;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Review Your Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary={name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age" secondary={age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Gender" secondary={gender} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary={phone} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary={address} />
          </ListItem>
        </List>

        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={prevStep} sx={{ mr: 2 }}>
            Previous
          </Button>
          <Button variant="contained" color="primary" onClick={submitForm}>
            Confirm & Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Confirmation;
