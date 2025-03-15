import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactNode;
}

function PrivateRoute(props: Props) {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.LOGIN} />
  );
}

export default PrivateRoute;
