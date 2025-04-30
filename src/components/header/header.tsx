import { Link } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

function Header() {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorization.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);

  const isUserLoggedIn = authorizationStatus === AuthorizationStatus.Auth && userData !== null;
  const userName = isUserLoggedIn ? userData?.email : '';
  const favoriteCount = 0;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoutes.MAIN}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isUserLoggedIn ? (
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name">{userName}</span>
                      <span className="header__favorite-count">{favoriteCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#" onClick={handleLogout}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
