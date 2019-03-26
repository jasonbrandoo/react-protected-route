import React from 'react';

const checkUser = (usernameInput, passwordInput) => {
  const local = localStorage.getItem('user');
  const { username, password } = JSON.parse(local);
  if (username === usernameInput && password === passwordInput) {
    console.log('OK');
  } else {
    console.log('NO ACCESS');
  }
};

const AuthContext = React.createContext({
  auth: 'true',
  isAuth: checkUser,
});

export default AuthContext;
