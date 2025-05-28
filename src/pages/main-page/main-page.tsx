import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import CitiesNavigation from '../../components/cities-navigation/cities-navigation';
import SortForm from '../../components/sort-form/sort-form';
import { SortOptions } from '../../utils/const';
import { SortOption } from '../../types/sort.ts';
import { sortOffers } from '../../utils/sort.ts';
import { BaseOffer } from '../../types/offer.ts';

import MainEmpty from '../../components/main-empty/main-empty';
import OfferList from '../../components/offer/offer-list/offer-list';
import Map from '../../components/map/Map.tsx';
import {getCityLocation, getCityName, getOffers} from '../../store/city-offers/selectors.ts';


function MainPage() {
  const currentCity = useAppSelector(getCityName);
  const currentCityLocation = useAppSelector(getCityLocation);
  const allOffers = useAppSelector(getOffers);

  const filteredOffers = allOffers.filter((offer) => offer.city.name === currentCity);
  const rentalOffersCount = filteredOffers.length;
  const hasOffers = rentalOffersCount > 0;

  const [currentSort, setCurrentSort] = useState<SortOption>(SortOptions.Popular);
  const [hoveredOffer, setHoveredOffer] = useState<BaseOffer | undefined>(undefined);

  const sortedOffers = sortOffers(filteredOffers, currentSort);

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
                <SortForm currentSort={currentSort} onSortChange={setCurrentSort}/>
                <OfferList
                  offers={sortedOffers}
                  onCardSelect={setHoveredOffer}
                />
              </section>
            ) : (
              <MainEmpty city={currentCity} />
            )}
            <div className="cities__right-section">{hasOffers && <Map offers={filteredOffers} cityLocation={currentCityLocation} currentOffer={hoveredOffer}/>}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
