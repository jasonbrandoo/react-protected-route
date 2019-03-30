import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Router from './routes/Router';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

console.log(theme);

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
