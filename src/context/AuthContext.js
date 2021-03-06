import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';
import {
  reducer,
  initialState,
  USER_LOADED,
  AUTH_FAIL,
} from '../reducers/authReducer';

const Context = React.createContext();

const AuthContext = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    Axios.get('http://localhost:5000/user/auth', {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    })
      .then(({ data }) => {
        dispatch({ type: USER_LOADED, payload: data });
      })
      .catch(err => {
        dispatch({ type: AUTH_FAIL });
        console.log(err);
      });
  }, []);

  return <Context.Provider value={{ state, dispatch }} {...props} />;
};

export { Context, AuthContext };
