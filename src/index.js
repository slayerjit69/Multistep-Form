// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Vibrant purple
    },
    secondary: {
      main: '#03dac6', // Complementary teal
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
  },
});

// Create a root using the new API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the application
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
