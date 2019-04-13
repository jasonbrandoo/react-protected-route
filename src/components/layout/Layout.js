import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
import Appbar from './Appbar/Appbar';
import Router from '../routes/Router';

const style = () => ({
  root: {
    display: 'flex',
  },
});

const Layout = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <div className={classes.root}>
      <Appbar drawer={handleDrawerToggle} />
      <Sidebar open={open} drawer={handleDrawerToggle} />
      <Router />
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Layout);
