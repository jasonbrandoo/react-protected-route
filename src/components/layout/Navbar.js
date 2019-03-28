import React, { useState } from 'react';
import {
  withStyles, AppBar, Toolbar, Drawer, Hidden, IconButton,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import NavLink from './NavLink';

const style = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
    },
  },
  drawerPaper: {
    width: 240,
  },
  appBar: {
    marginLeft: 240,
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 240px)',
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

const Navbar = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerToggle} className={classes.menuButton}>
            <Menu />
          </IconButton>
          <NavLink />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer variant="temporary" anchor="left" open={open} onClose={handleDrawerToggle} classes={{ paper: classes.drawerPaper }}>
            <h1>tesas</h1>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" anchor="left" open classes={{ paper: classes.drawerPaper }}>
            <h1>tes</h1>
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

export default withStyles(style)(Navbar);
