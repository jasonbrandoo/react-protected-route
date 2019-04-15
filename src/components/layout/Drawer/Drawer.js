import React from 'react';
import { withStyles, Drawer, Hidden, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import DrawerList from './DrawerList';

const style = theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: 240,
    },
  },
  drawerPaper: {
    width: 240,
  },
});

const Drawers = ({ classes, open, drawer }) => {
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => drawer()}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <DrawerList drawer={drawer} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          anchor="left"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <DrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

Drawers.defaultProps = {
  drawer: () => {},
};

Drawers.propTypes = {
  classes: PropTypes.shape({
    drawer: PropTypes.string,
    drawerPaper: PropTypes.string,
    toolbar: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  drawer: PropTypes.func,
};

export default withStyles(style)(Drawers);
