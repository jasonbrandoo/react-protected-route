import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';

const style = theme => ({
  left: {
    marginLeft: 'auto',
  },
});

const NavLink = ({ classes }) => (
  <React.Fragment>
    <Button to="/" component={RouterLink} color="inherit" variant="text">
      Protected-Route
    </Button>
    <Button
      className={classes.left}
      to="/login"
      component={RouterLink}
      color="inherit"
      variant="text"
    >
      Login
    </Button>
    <Button to="/register" component={RouterLink} color="inherit" variant="text">
      Register
    </Button>
  </React.Fragment>
);

export default withStyles(style)(NavLink);
