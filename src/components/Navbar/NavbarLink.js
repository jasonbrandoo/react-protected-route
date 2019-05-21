import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  withStyles,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { AccountCircle } from '@material-ui/icons';

const style = () => ({
  title: {
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
  },
});

const NavbarLink = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        to="/"
        component={RouterLink}
        color="inherit"
        variant="text"
        className={classes.title}
      >
        Protected-Route
      </Button>
      {/* <Button to="/login" component={RouterLink} color="inherit" variant="text">
        Login
      </Button>
      <Button
        to="/register"
        component={RouterLink}
        color="inherit"
        variant="text"
      >
        Register
      </Button> */}
      <React.Fragment>
        <IconButton
          color="inherit"
          onClick={handleClick}
          aria-owns={anchorEl ? 'profile' : undefined}
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="profile"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClick={handleClose}
        >
          <MenuItem>Log out</MenuItem>
        </Menu>
      </React.Fragment>
    </React.Fragment>
  );
};

NavbarLink.propTypes = {
  classes: PropTypes.shape({
    left: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(NavbarLink);
