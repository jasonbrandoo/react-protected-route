import React, { useContext, useEffect } from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Context } from "../../context/AuthContext";

const style = () => ({
  root: {
    marginTop: 10
  },
  divider: {
    marginTop: 10,
    marginBottom: 10
  }
});

const Public = ({ classes }) => {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    console.log("context", state);
  });

  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.root}>
        Public page {state.isLoggedIn === true ? "true" : "false"}
      </Typography>
      <Divider className={classes.divider} />
      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        necessitatibus modi ab, rerum odio esse vero saepe optio. Adipisci
        voluptatum tempore numquam consectetur voluptatibus iusto. Eius, nihil!
        Eaque cupiditate at quae alias blanditiis rem laborum laboriosam natus,
        asperiores quibusdam a beatae iste dolore, atque enim ipsum aut sapiente
        doloribus. Eos!
      </Typography>
    </React.Fragment>
  );
};

export default withStyles(style)(Public);
