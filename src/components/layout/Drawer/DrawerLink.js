import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const DrawerLink = ({ to, icon, primary, drawer }) => {
  const renderLink = linkProps => {
    console.log(linkProps);
    return <Link to={to} {...linkProps} />;
  };
  return (
    <li>
      <ListItem button component={renderLink} onClick={drawer || null}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

DrawerLink.defaultProps = {
  drawer: () => {},
};

DrawerLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  drawer: PropTypes.func,
};

export default DrawerLink;
