import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { favoritePlaces } from './mocks/favorite-places';
import { fullOffers } from './mocks/fullOffers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import {checkAuthAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        favoritePlaces={favoritePlaces}
        fullOffers={fullOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
