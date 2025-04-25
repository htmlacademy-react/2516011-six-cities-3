import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { favoritePlaces } from './mocks/favorite-places.ts';
import { fullOffers } from './mocks/fullOffers.ts';
import { reviews } from './mocks/reviews.ts';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favoritePlaces={favoritePlaces}
        fullOffers={fullOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
