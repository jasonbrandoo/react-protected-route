import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const style = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Protected = ({ classes }) => (
  <Typography variant="h4" align="center" className={classes.root}>
    Protected Page
  </Typography>
);

Protected.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Protected);
