interface Props {
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
}

function OfferTitle({ title, isPremium, isFavorite }: Props) {
  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <h1 className="offer__name">{title}</h1>
      <button className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </>
  );
}

export default OfferTitle;
