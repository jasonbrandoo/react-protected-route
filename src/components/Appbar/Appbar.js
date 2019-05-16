import React from 'react';
import { withStyles, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import AppbarLink from './AppbarLink';

const style = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // marginLeft: 240,
    // [theme.breakpoints.up('sm')]: {
    //   width: 'calc(100% - 240px)',
    // },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

const Appbar = ({ classes, drawer }) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" onClick={drawer}>
          <Menu />
        </IconButton>
        <AppbarLink />
      </Toolbar>
    </AppBar>
  );
};

Appbar.propTypes = {
  classes: PropTypes.shape({
    appBar: PropTypes.string,
    menuButton: PropTypes.string,
  }).isRequired,
  drawer: PropTypes.func.isRequired,
};

export default withStyles(style)(Appbar);