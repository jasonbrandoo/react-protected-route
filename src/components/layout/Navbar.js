import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import NavLink from './NavLink';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <NavLink />
    </Toolbar>
  </AppBar>
);

export default Navbar;
