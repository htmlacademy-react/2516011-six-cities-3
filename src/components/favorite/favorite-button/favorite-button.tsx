import { useAppDispatch } from '../../../hooks';
import { toggleFavoriteStatus } from '../../../store/api-actions';

type FavoriteButtonProps = {
  offerId: string;
  isFavorite: boolean;
  className?: string;
  width?: number;
  height?: number;
};

function FavoriteButton({offerId, isFavorite, className = 'place-card', width = 18, height = 19}: FavoriteButtonProps) {
  const dispatch = useAppDispatch();

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
