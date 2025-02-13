import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { RENTAL_OFFERS_COUNT } from './utils/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={RENTAL_OFFERS_COUNT} />
  </React.StrictMode>
);
