import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { Dashboard, List as ListIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarLink = ({ drawer }) => {
  const renderLink = props => <Link to="/login" {...props} />;

  return (
    <List component="nav">
      <ListItem button component={renderLink} onClick={drawer || null}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Item" />
      </ListItem>
    </List>
  );
};

SidebarLink.propTypes = {
  drawer: PropTypes.func.isRequired,
};

export default SidebarLink;
