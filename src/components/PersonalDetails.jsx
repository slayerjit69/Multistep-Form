// src/components/PersonalDetails.js
import React from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const PersonalDetails = ({ formData, handleChange, nextStep }) => {
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    age: Yup.number()
      .typeError('Age must be a number')
      .positive('Age must be positive')
      .required('Please enter your age'),
    gender: Yup.string().required('Please select your gender'),
  });

  const handleSubmit = (values) => {
    nextStep();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Personal Details
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
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={values.name}
                onChange={(e) => {
                  formikHandleChange(e);
                  handleChange('name')(e);
                }}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                label="Age"
                name="age"
                type="number"
                fullWidth
                margin="normal"
                value={values.age}
                onChange={(e) => {
                  formikHandleChange(e);
                  handleChange('age')(e);
                }}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
              />

              <FormControl
                fullWidth
                margin="normal"
                error={touched.gender && Boolean(errors.gender)}
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={values.gender}
                  label="Gender"
                  onChange={(e) => {
                    formikHandleChange(e);
                    handleChange('gender')(e);
                  }}
                >
                  <MenuItem value="">
                    <em>Select One</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
                {touched.gender && errors.gender && (
                  <Typography variant="caption" color="error">
                    {errors.gender}
                  </Typography>
                )}
              </FormControl>

              <Box sx={{ mt: 2 }}>
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

export default PersonalDetails;
