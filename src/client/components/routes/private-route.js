import React from 'react';
import propTypes from 'prop-types';

import {Route, Redirect} from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useLogin();

  return <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
};

PrivateRoute.propTypes = {
  component: propTypes.func,
};

export default PrivateRoute;
