import React, { useState, useReducer, useEffect } from 'react';
import {
  withStyles,
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  reducer, initialState, USER_LOADED, USER_LOADING,
} from '../../reducers/authReducer';

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

const Login = ({ classes }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log('state', state);
  });

  const handleUsername = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: USER_LOADING });
    axios
      .post('http://localhost:5000/user/login', {
        username: name,
        password,
      })
      .then(({ data }) => {
        dispatch({ type: USER_LOADED, payload: data });
        console.log('data', data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Paper className={classes.paper}>
      <form className={classes.form} onSubmit={e => handleSubmit(e)}>
        <Typography variant="h4">Login</Typography>
        <FormControl required margin="normal" fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input type="text" name="username" onChange={e => handleUsername(e)} />
        </FormControl>
        <FormControl required margin="normal" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input type="password" name="password" onChange={e => handlePassword(e)} />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          fullWidth
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

Login.propTypes = {
  classes: PropTypes.shape({
    paper: PropTypes.string,
    form: PropTypes.string,
    button: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Login);
