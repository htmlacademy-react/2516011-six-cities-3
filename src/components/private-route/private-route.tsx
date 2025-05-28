import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute({ authorizationStatus, children }: PropsWithChildren<PrivateRouteProps>) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.LOGIN} />
  );
}

export default PrivateRoute;
