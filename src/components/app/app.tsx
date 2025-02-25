import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {offer} from '../../mocks/offer.ts';

interface AppProps {
  rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.MAIN}
          element={<MainPage rentalOffersCount={rentalOffersCount} />}
        />
        <Route
          path={AppRoutes.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={`${AppRoutes.OFFER}`}
          element={<OfferPage offer={offer} />}
        />
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.NOT_FOUND}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
