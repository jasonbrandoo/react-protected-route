import React from 'react';
import { withStyles, Drawer, Divider } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarList from './SidebarList';

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

const Sidebar = ({ classes, open, drawer }) => {
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
          <SidebarList />
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
          <SidebarList drawer={drawer} />
        </Drawer>
      )}
    </React.Fragment>
  );
};

Sidebar.defaultProps = {
  drawer: () => {},
};

Sidebar.propTypes = {
  classes: PropTypes.shape({
    drawer: PropTypes.string,
    drawerPaper: PropTypes.string,
    toolbar: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  drawer: PropTypes.func,
};

export default withStyles(style)(Sidebar);
