import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  FormControl,
  Input,
  withStyles,
  Paper,
  InputLabel,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../../reducers/authReducer';
import { Context } from '../../context/AuthContext';

const style = theme => ({
  paper: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

const Register = ({ classes }) => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(Context);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleFullname = e => {
    setFullname(e.target.value);
  };
  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const User = {
      fullname,
      username,
      password,
    };
    if (password !== confirmPassword) {
      handleOpen();
    } else {
      axios
        .post('http://localhost:5000/user/register', User)
        .then(({ data }) => {
          dispatch({ type: REGISTER_SUCCESS, payload: data });
          window.location.href = '/';
        })
        .catch(err => {
          dispatch({ type: REGISTER_FAIL });
          console.log(err);
        });
    }
  };

  return (
    <React.Fragment>
      <Dialog open={open}>
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>
          <DialogContentText>Your password not match</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={e => handleSubmit(e)}>
          <Typography variant="h4" component="h1">
            Register
          </Typography>
          <FormControl required margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              type="text"
              name="fullname"
              onChange={e => handleFullname(e)}
            />
          </FormControl>
          <FormControl required margin="normal" fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              type="text"
              name="username"
              onChange={e => handleUsername(e)}
            />
          </FormControl>
          <FormControl required margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              name="initPassword"
              onChange={e => handlePassword(e)}
            />
          </FormControl>
          <FormControl required margin="normal" fullWidth>
            <InputLabel htmlFor="confirm">Confirm Password</InputLabel>
            <Input
              type="password"
              name="confirmPassword"
              onChange={e => handleConfirmPassword(e)}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
};

Register.propTypes = {
  classes: PropTypes.shape({
    paper: PropTypes.string,
    form: PropTypes.string,
    button: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withStyles(style)(Register);
