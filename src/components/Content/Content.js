import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Routes from '../Routes/Router';

const style = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Content = ({ classes }) => (
  <div className={classes.content}>
    <div className={classes.toolbar} />
    <Routes />
  </div>
);

Content.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Content);
