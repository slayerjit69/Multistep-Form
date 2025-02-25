// src/components/MultiStepForm.js
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const submitForm = () => {
    // Handle form submission (e.g., send data to a server)
    nextStep();
  };

  const steps = ['Personal Details', 'Contact Details', 'Review'];

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {(() => {
        switch (step) {
          case 1:
            return (
              <PersonalDetails
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            );
          case 2:
            return (
              <ContactDetails
                formData={formData}
                handleChange={handleChange}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            );
          case 3:
            return (
              <Confirmation
                formData={formData}
                prevStep={prevStep}
                submitForm={submitForm}
              />
            );
          case 4:
            return <Success />;
          default:
            return null;
        }
      })()}
    </Box>
  );
};

export default MultiStepForm;
