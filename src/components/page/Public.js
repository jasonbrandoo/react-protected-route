import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const style = () => ({
  root: {
    marginTop: 20,
    textAlign: 'center',
  },
});

const Public = ({ classes }) => (
  <React.Fragment>
    <Typography variant="h4" className={classes.root}>
      Public page
    </Typography>
  </React.Fragment>
);

export default withStyles(style)(Public);
