import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';

import { Provider } from 'react-redux';
import { favoritePlaces } from './mocks/favorite-places';
import { fullOffers } from './mocks/fullOffers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        favoritePlaces={favoritePlaces}
        fullOffers={fullOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
