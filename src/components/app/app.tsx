import {Route, Routes} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Spinner from '../spinner/spinner';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import { OfferShort } from '../../types/offer.ts';
import { Review } from '../../types/reviews.ts';

interface AppProps {
  favoritePlaces?: OfferShort[];
  reviews?: Review[];
}

function App({favoritePlaces = [], reviews = []}: AppProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.cityOffers.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown
    || isOffersDataLoading) {
    return (
      <Spinner />
    );
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
          element={<LoginPage/>}
        />
        <Route
          path={`${AppRoutes.OFFER}`}
          element=
            {
              <OfferPage
                reviews={reviews}
              />
            }
        />
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesPage favoritePlaces={favoritePlaces}/>
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
