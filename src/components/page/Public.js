import React from 'react';
import { Typography, withStyles, Divider } from '@material-ui/core';

const style = () => ({
  root: {
    marginTop: 10,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const Public = ({ classes }) => (
  <React.Fragment>
    <Typography variant="h4" className={classes.root}>
      Public page
    </Typography>
    <Divider className={classes.divider} />
    <Typography paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus modi ab,
      rerum odio esse vero saepe optio. Adipisci voluptatum tempore numquam consectetur voluptatibus
      iusto. Eius, nihil! Eaque cupiditate at quae alias blanditiis rem laborum laboriosam natus,
      asperiores quibusdam a beatae iste dolore, atque enim ipsum aut sapiente doloribus. Eos!
    </Typography>
  </React.Fragment>
);

export default withStyles(style)(Public);
