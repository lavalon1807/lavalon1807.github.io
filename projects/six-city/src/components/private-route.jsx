import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {userAuth} from '../mocks/constants';

const PrivateRoute = ({component: Component}) => {
  const {authorizationStatus} = useSelector((state) => state.LOAD_AUTH);
  return(
    <Route
      render={(props) =>
        authorizationStatus === userAuth.AUTH ? <Component {...props} /> : <Redirect to='/error' />
      }
    />
  )
};

export default PrivateRoute;
