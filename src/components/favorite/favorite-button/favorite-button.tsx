import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../../utils/const';
import { toggleFavoriteStatus } from '../../../store/api-actions';
import { getAuthorizationStatus } from '../../../store/user/selectors';

type FavoriteButtonProps = {
  offerId: string;
  isFavorite: boolean;
};

function FavoriteButton({offerId, isFavorite}: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  const handleClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoutes.LOGIN);
      return;
    }

    dispatch(toggleFavoriteStatus({
      offerId,
      status: !isFavorite,
    }));
  };

  return (
    <button
      className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
      onClick={handleClick}
    >
      <svg className={'place-card__bookmark-icon'} width={18} height={19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
