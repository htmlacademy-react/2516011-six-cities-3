import { useAppSelector } from '../../hooks';
import { getFavorites, getIsFavoritesLoading } from '../../store/favorite/selectors';

import FavoriteLocation from '../../components/favorite/favorite-location/favorite-location';
import Spinner from '../../components/spinner/spinner.tsx';
import Layout from '../../components/layout/layout.tsx';

function FavoritesPage() {
  const favoritePlaces = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getIsFavoritesLoading);

  const groupedFavorites = favoritePlaces.reduce<{ [key: string]: typeof favoritePlaces }>((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {});

  const hasFavorites = favoritePlaces.length > 0;

  const pageMainClass = `page__main page__main--favorites${!hasFavorites ? ' page__main--favorites-empty' : ''}`;
  const layoutClass = !hasFavorites ? 'page--favorites-empty' : '';

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (hasFavorites) {
    content = (
      <section className="favorites">
        <h1 className="favorites__title">Saved Listing</h1>
        <ul className="favorites__list">
          {Object.entries(groupedFavorites).map(([cityName, offers]) => (
            <FavoriteLocation key={cityName} cityName={cityName} offers={offers} />
          ))}
        </ul>
      </section>
    );
  } else {
    content = (
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Favorites (empty)</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">
            Save properties to narrow down search or plan your future trips.
          </p>
        </div>
      </section>
    );
  }

  return (
    <Layout className={layoutClass}>
      <main className={pageMainClass}>
        <div className="page__favorites-container container">
          {content}
        </div>
      </main>
    </Layout>
  );
}

export default FavoritesPage;
