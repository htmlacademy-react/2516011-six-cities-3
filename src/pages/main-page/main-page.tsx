import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';

import { offers } from '../../mocks/offers';
import {SortOptions} from '../../utils/const.ts';

interface MainPageProps {
  rentalOffersCount: number;
}

function MainPage({ rentalOffersCount }: MainPageProps) {
  const hasOffers = offers.length > 0;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${!hasOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${!hasOffers ? 'cities__places-container--empty' : ''}`}>
            {hasOffers ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
                <SortForm currentSort={SortOptions.Popular} />
                <div className="cities__places-list places__list tabs__content">
                  {offers.map((offer) => (
                    <PlaceCard
                      key={offer.id}
                      id={offer.id}
                      title={offer.title}
                      type={offer.type}
                      price={offer.price}
                      isFavorite={offer.isFavorite}
                      isPremium={offer.isPremium}
                      rating={offer.rating}
                      previewImage={offer.previewImage}
                    />
                  ))}
                </div>
              </section>
            ) : (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in Amsterdam
                  </p>
                </div>
              </section>
            )}
            <div className="cities__right-section">
              {hasOffers && <section className="cities__map map"></section>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
