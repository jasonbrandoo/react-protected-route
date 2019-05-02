import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Drawer from './drawer/Drawer';
import Appbar from './appbar/Appbar';
import Content from './content/Content';
import Router from '../routes/Router';

const style = () => ({
  root: {
    display: 'flex',
  },
});

const Layout = ({ classes }) => {
  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen(state => !state);
  };

  return (
    <div className={classes.root}>
      <Appbar drawer={handleDrawerToggle} />
      <Drawer open={open} drawer={handleDrawerToggle} />
      <Content open={open}>
        <Router />
      </Content>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Layout);
