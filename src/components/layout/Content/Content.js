import React from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const style = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginLeft: -240,
  },
  contentShift: {
    marginLeft: 0,
  },
});

const Content = ({ children, classes, open }) => (
  <div
    className={classNames(classes.content, {
      [classes.contentShift]: open,
    })}
  >
    <div className={classes.toolbar} />
    {children}
  </div>
);

Content.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  children: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(style)(Content);
