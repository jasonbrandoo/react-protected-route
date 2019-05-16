import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { AuthContext } from './context/AuthContext';
import Dashboard from './template/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <AuthContext>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    </BrowserRouter>
  </AuthContext>
);

export default App;
