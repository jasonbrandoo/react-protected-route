import React from 'react';
import { List, Divider } from '@material-ui/core';
import {
  Dashboard,
  List as ListIcon,
  Info,
  Settings,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';

const SidebarList = ({ drawer }) => {
  return (
    <List component="nav">
      <SidebarLink
        to="/dashboard"
        icon={<Dashboard />}
        primary="Dashboard"
        drawer={drawer}
      />
      <Divider />
      <SidebarLink
        to="/users"
        icon={<ListIcon />}
        primary="Item"
        drawer={drawer}
      />
      <Divider />
      <SidebarLink
        to="/setting"
        icon={<Settings />}
        primary="Setting"
        drawer={drawer}
      />
      <Divider />
      <SidebarLink
        to="/about"
        icon={<Info />}
        primary="About"
        drawer={drawer}
      />
    </List>
  );
};

SidebarList.defaultProps = {
  drawer: () => {},
};

SidebarList.propTypes = {
  drawer: PropTypes.func,
};

export default SidebarList;
