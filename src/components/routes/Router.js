import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Protected from '../page/Protected';
import Public from '../page/Public';
import Login from '../page/auth/Login';
import Register from '../page/auth/Register';
import Navbar from '../layout/Navbar';

const Router = () => (
  <Navbar>
    <Switch>
      <PublicRoute exact path="/" component={Public} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <ProtectedRoute exact path="/protected" component={Protected} />
    </Switch>
  </Navbar>
);

export default Router;
