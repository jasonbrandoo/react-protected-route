import React from 'react';
import { withStyles, Drawer, Divider } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import DrawerList from './DrawerList';

const style = theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    flexShrink: 0,
    width: 240,
  },
  drawerShift: {
    margin: 0,
  },
  drawerPaper: {
    width: 240,
  },
});

const Drawers = ({ classes, open }) => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <React.Fragment>
      {matches ? (
        <nav className={classes.drawer}>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.toolbar} />
            <Divider />
            <DrawerList />
          </Drawer>
        </nav>
      ) : (
        <nav className={classes.drawerShift}>
          <Drawer
            variant="persistent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.toolbar} />
            <Divider />
            <DrawerList />
          </Drawer>
        </nav>
      )}
    </React.Fragment>
  );
};

Drawers.propTypes = {
  classes: PropTypes.shape({
    drawer: PropTypes.string,
    drawerPaper: PropTypes.string,
    toolbar: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(style)(Drawers);
