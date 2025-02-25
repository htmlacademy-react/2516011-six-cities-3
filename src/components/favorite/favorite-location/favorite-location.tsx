import FavoriteCard from '../favorite-card/favorite-card';
import {FavoriteCardProps} from '../../../types/card';

interface Props {
  city: string;
  places: FavoriteCardProps[];
}

function FavoriteLocation ({ city, places }: Props) {
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
