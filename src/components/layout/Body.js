import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const style = () => {
  return {
    root: {
      display: 'flex',
    },
  };
};

const Body = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

Body.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  children: PropTypes.func.isRequired,
};

export default withStyles(style)(Body);
