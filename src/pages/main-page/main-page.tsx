import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import CitiesNavigation from '../../components/cities-navigation/cities-navigation';
import SortForm from '../../components/sort-form/sort-form';
import { SortOptions } from '../../utils/const';
import OfferList from '../../components/offer/offer-list/offer-list';
import Map from '../../components/map/Map.tsx';

function MainPage() {
  const currentCity = useAppSelector((state) => state.city.name);
  const currentCityLocation = useAppSelector((state) => state.city.location);
  const allOffers = useAppSelector((state) => state.offers);

  const filteredOffers = allOffers.filter((offer) => offer.city.name === currentCity);

  const rentalOffersCount = filteredOffers.length;
  const hasOffers = rentalOffersCount > 0;

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
                <b className="places__found">{rentalOffersCount} places to stay in {currentCity}</b>
                <SortForm currentSort={SortOptions.Popular} />
                <OfferList offers={filteredOffers} />
              </section>
            ) : (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {currentCity}
                  </p>
                </div>
              </section>
            )}
            <div className="cities__right-section">{hasOffers && <Map offers={filteredOffers} cityLocation={currentCityLocation} />}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
