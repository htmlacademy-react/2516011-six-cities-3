import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { favoritePlaces } from './mocks/favorite-places.ts';
import { fullOffers } from './mocks/fullOffers.ts';
import { offers } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';
import { store } from './store';

import { RENTAL_OFFERS_COUNT } from './utils/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        offers={offers}
        favoritePlaces={favoritePlaces}
        fullOffers={fullOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
