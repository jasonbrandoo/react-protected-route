import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Drawer from '../components/Drawer/Drawer';
import Appbar from '../components/Appbar/Appbar';
import Content from '../components/Content/Content';
import Router from '../components/Routes/Router';

const style = () => ({
  root: {
    display: 'flex',
  },
});

const Dashboard = ({ classes }) => {
  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen(state => !state);
  };

  return (
    <div className={classes.root}>
      <Appbar drawer={handleDrawerToggle} />
      <Drawer open={open} drawer={handleDrawerToggle} />
      <Content>
        <Router />
      </Content>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Dashboard);
