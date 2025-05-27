import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Spinner from '../spinner/spinner';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import PublicRoute from '../public-route/public-route.tsx';
import { fetchFavoritesAction } from '../../store/api-actions';

function App() {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.cityOffers.isOffersDataLoading);
  const hasFavoritesBeenLoaded = useAppSelector((state) => state.favorite.hasFavoritesBeenLoaded);

  useEffect(() => {
    if (
      authorizationStatus === AuthorizationStatus.Auth &&
      !hasFavoritesBeenLoaded
    ) {
      dispatch(fetchFavoritesAction());
    }
  }, [authorizationStatus, hasFavoritesBeenLoaded, dispatch]);

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading ||
    (authorizationStatus === AuthorizationStatus.Auth && !hasFavoritesBeenLoaded)
  ) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoutes.MAIN}
          element={<MainPage/>}
        />
        <Route
          path={AppRoutes.LOGIN}
          element={
            <PublicRoute authorizationStatus={authorizationStatus}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={`${AppRoutes.OFFER}`}
          element=
            {
              <OfferPage/>
            }
        />
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.NOT_FOUND}
          element={<NotFoundPage/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
