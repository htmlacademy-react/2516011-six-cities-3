import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {OfferFull, OfferShort} from '../../types/offer.ts';
import {Review} from '../../types/reviews.ts';

interface AppProps {
  rentalOffersCount: number;
  fullOffers: OfferFull[];
  offers: OfferShort[];
  favoritePlaces?: OfferShort[];
  reviews?: Review[];
}

function App({rentalOffersCount, fullOffers, offers, favoritePlaces = [], reviews = []}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.MAIN}
          element={<MainPage rentalOffersCount={rentalOffersCount} offers={offers}/>}
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
                fullOffers={fullOffers}
                offers={offers}
                reviews={reviews}
              />
            }
        />
        <Route
          path={AppRoutes.FAVORITES}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
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
    </BrowserRouter>
  );
}

export default App;
