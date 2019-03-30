import React, { useState } from 'react';
import {
  withStyles, AppBar, Toolbar, Drawer, Hidden, IconButton, Divider,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import NavLink from './NavLink';

const style = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: 240,
    },
  },
  drawerPaper: {
    width: 240,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // marginLeft: 240,
    // [theme.breakpoints.up('sm')]: {
    //   width: 'calc(100% - 240px)',
    // },
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Navbar = ({ classes, children }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
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
            <div className={classes.toolbar} />
            <Divider />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" anchor="left" open classes={{ paper: classes.drawerPaper }}>
            <div className={classes.toolbar} />
            <Divider />
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default withStyles(style)(Navbar);
