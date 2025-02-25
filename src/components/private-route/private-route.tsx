import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.LOGIN} />
  );
}

export default PrivateRoute;
