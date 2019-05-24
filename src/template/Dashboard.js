import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Body from '../components/Body/Body';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Content from '../components/Content/Content';

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
      <Body
        navbar={<Navbar drawer={handleDrawerToggle} />}
        sidebar={<Sidebar open={open} drawer={handleDrawerToggle} />}
        content={<Content />}
      />
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Dashboard);
