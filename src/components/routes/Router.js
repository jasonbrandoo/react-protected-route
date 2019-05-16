import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './Public';
import ProtectedRoute from './Protected';
import Protected from '../../pages/Protected';
import Public from '../../pages/Public';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import Users from '../../pages/users/Users';

const Router = () => (
  <Switch>
    <PublicRoute exact path="/" component={Public} />
    <PublicRoute exact path="/login" component={Login} />
    <PublicRoute exact path="/register" component={Register} />
    <PublicRoute exact path="/users" component={Users} />
    <ProtectedRoute exact path="/protected" component={Protected} />
  </Switch>
);

export default Router;
