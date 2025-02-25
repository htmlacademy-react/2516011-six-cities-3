import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteLocation from '../../components/favorite/favorite-location/favorite-location';
import { favoritePlaces } from '../../mocks/favorite-places';

function FavoritesPage() {
  const hasFavorites = favoritePlaces.length > 0;

  return (
    <div className={`page ${!hasFavorites ? 'page--favorites-empty' : ''}`}>
      <Header />
      <main className={`page__main page__main--favorites ${!hasFavorites ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved Listing</h1>
              <ul className="favorites__list">
                {favoritePlaces.map((city) => (
                  <FavoriteLocation key={city.city} city={city.city} places={city.places.map((place) => ({ ...place, id: String(place.id) }))} />
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
