import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';

type PublicRouteProps = {
  authorizationStatus: AuthorizationStatus;
};

function PublicRoute({ authorizationStatus, children }: PropsWithChildren<PublicRouteProps>) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoutes.MAIN} />
      : children
  );
}

export default PublicRoute;
