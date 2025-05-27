import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactNode;
};

function PublicRoute({ authorizationStatus, children }: Props) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoutes.MAIN} />
      : children
  );
}

export default PublicRoute;
