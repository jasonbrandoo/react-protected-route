import React from 'react';
import { List, Divider } from '@material-ui/core';
import { Dashboard, List as ListIcon, Info } from '@material-ui/icons';
import PropTypes from 'prop-types';
import DrawerLink from './DrawerLink';

const DrawerList = ({ drawer }) => {
  return (
    <List component="nav">
      <DrawerLink
        to="/dashboard"
        icon={<Dashboard />}
        primary="Dashboard"
        drawer={drawer}
      />
      <Divider />
      <DrawerLink
        to="/item"
        icon={<ListIcon />}
        primary="Item"
        drawer={drawer}
      />
      <Divider />
      <DrawerLink to="/about" icon={<Info />} primary="About" drawer={drawer} />
    </List>
  );
};

DrawerList.defaultProps = {
  drawer: () => {},
};

DrawerList.propTypes = {
  drawer: PropTypes.func,
};

export default DrawerList;
