import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Protected = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

Protected.propTypes = {
  component: PropTypes.func.isRequired,
};

export default Protected;
