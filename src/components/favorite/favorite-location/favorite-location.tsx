import FavoriteCard, { FavoriteCardProps } from '../favorite-card/favorite-card';

interface FavoriteLocationProps {
  city: string;
  places: FavoriteCardProps[];
}

function FavoriteLocation ({ city, places }: FavoriteLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.map((place) => (
          <FavoriteCard key={place.id} {...place} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteLocation;
