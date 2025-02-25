// src/components/ContactDetails.js
import React from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ContactDetails = ({ formData, handleChange, prevStep, nextStep }) => {
  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Please enter your email'),
    phone: Yup.string()
      .matches(/^\d+$/, 'Phone number must be digits only')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Please enter your phone number'),
    address: Yup.string().required('Please enter your address'),
  });

  const handleSubmit = (values) => {
    nextStep();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Contact Details
        </Typography>
        <Formik
          initialValues={formData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange: formikHandleChange,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={values.email}
                onChange={(e) => {
                  formikHandleChange(e);
                  handleChange('email')(e);
                }}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                margin="normal"
                value={values.phone}
                onChange={(e) => {
                  formikHandleChange(e);
                  handleChange('phone')(e);
                }}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />

              <TextField
                label="Address"
                name="address"
                fullWidth
                margin="normal"
                multiline
                minRows={1}
                maxRows={Infinity}
                value={values.address}
                onChange={(e) => {
                  formikHandleChange(e);
                  handleChange('address')(e);
                }}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
              />

              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" onClick={prevStep} sx={{ mr: 2 }}>
                  Previous
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Next
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ContactDetails;
