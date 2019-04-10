import React from "react";
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import { Dashboard, List as ListIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const style = () => {
  return {
    fontSize: 50
  };
};

const SidebarLink = ({ classes, drawer }) => {
  
  const renderLink = (props) => (
    <Link to="/login" {...props} />
  );
  return (
    <List component="nav">
      <ListItem button component={renderLink} onClick={() => drawer()}>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="tes" />
      </ListItem>
    </List>
  );
};

export default withStyles(style)(SidebarLink);
