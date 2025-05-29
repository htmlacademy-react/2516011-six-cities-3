import { useAppDispatch, useAppSelector } from '../../../hooks';
import { toggleFavoriteStatus } from '../../../store/api-actions';
import {getFavoriteOfferById} from '../../../store/favorite/selectors.ts';

type FavoriteButtonProps = {
  offerId: string;
  className?: string;
  width?: number;
  height?: number;
};

function FavoriteButton({offerId, className = 'place-card', width = 18, height = 19}: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => getFavoriteOfferById(state, offerId));
  const isFavorite = offer?.isFavorite ?? false;

  const handleClick = () => {
    dispatch(toggleFavoriteStatus({
      offerId,
      status: !isFavorite,
    }));
  };

  return (
    <button
      className={`${className}__bookmark-button button ${isFavorite ? `${className}__bookmark-button--active` : ''}`}
      type="button"
      onClick={handleClick}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
