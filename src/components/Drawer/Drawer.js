import React from 'react';
import { withStyles, Drawer, Divider } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DrawerList from './DrawerList';

const style = theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    flexShrink: 0,
    width: 240,
  },
  drawerShift: {
    width: 0,
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
        <Drawer
          className={classNames(classes.drawer, {
            [classes.drawerShift]: !open,
          })}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <DrawerList />
        </Drawer>
      ) : (
        <Drawer
          className={classNames(classes.drawer, {
            [classes.drawerShift]: open,
          })}
          variant="persistent"
          anchor="left"
          open={!open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <DrawerList />
        </Drawer>
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
