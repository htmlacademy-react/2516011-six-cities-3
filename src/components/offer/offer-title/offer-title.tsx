import FavoriteButton from '../../favorite/favorite-button/favorite-button.tsx';

interface Props {
  id: string;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
}

function OfferTitle({ id, title, isPremium, isFavorite }: Props) {
  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <h1 className="offer__name">{title}</h1>
      <FavoriteButton offerId={id} isFavorite={isFavorite} className={'offer'} width={31} height={33}/>
    </>
  );
}

export default OfferTitle;
