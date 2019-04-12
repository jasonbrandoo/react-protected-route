import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Protected from '../pages/Protected';
import Public from '../pages/Public';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Content from '../layout/Content';

const Router = () => (
  <Content>
    <Switch>
      <PublicRoute exact path="/" component={Public} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <ProtectedRoute exact path="/protected" component={Protected} />
    </Switch>
  </Content>
);

export default Router;
