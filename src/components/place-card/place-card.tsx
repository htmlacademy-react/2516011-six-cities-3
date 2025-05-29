import { Link } from 'react-router-dom';
import { getRatingWidth } from '../../utils/helpers';
import FavoriteButton from '../favorite/favorite-button/favorite-button.tsx';

interface Props {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function PlaceCard({
  id,
  title,
  type,
  price,
  isPremium,
  rating,
  previewImage,
  onMouseEnter,
  onMouseLeave
}: Props) {
  const ratingWidth = getRatingWidth(rating);

  return (
    <article
      className="cities__card place-card"
      data-id={id}
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
