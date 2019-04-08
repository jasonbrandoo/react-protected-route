import React from 'react';
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

const style = () => {
  return {
    fontSize: 50,
  };
};

const SidebarLink = ({ classes }) => {
  console.log(classes);
  return (
    <List component="nav">
      <ListItem button>
        <ListItemText primary="tes" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="tes" />
      </ListItem>
    </List>
  );
};

export default withStyles(style)(SidebarLink);
