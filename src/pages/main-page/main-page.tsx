import Header from '../../components/header/header';
import CitiesNavigation from '../../components/cities-navigation/cities-navigation';
import SortForm from '../../components/sort-form/sort-form';
import { SortOptions } from '../../utils/const';
import OfferList from '../../components/offer/offer-list/offer-list';
import {OfferShort} from '../../types/offer.ts';

interface MainPageProps {
  rentalOffersCount: number;
  offers: OfferShort[];
}

function MainPage({ rentalOffersCount, offers }: MainPageProps) {
  const hasOffers = offers.length > 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!hasOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesNavigation />
        <div className="cities">
          <div className={`cities__places-container container ${!hasOffers ? 'cities__places-container--empty' : ''}`}>
            {hasOffers ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
                <SortForm currentSort={SortOptions.Popular} />
                <OfferList offers={offers} />
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
            <div className="cities__right-section">{hasOffers && <section className="cities__map map"></section>}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
