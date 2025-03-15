import { Link } from 'react-router-dom';
import FavoriteCard from '../favorite-card/favorite-card';
import { OfferShort } from '../../../types/offer';

interface FavoriteLocationProps {
  cityName: string;
  offers: OfferShort[];
}

function FavoriteLocation({ cityName, offers }: FavoriteLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoriteCard key={offer.id} {...offer} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteLocation;
