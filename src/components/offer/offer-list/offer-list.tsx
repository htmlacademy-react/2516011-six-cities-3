import PlaceCard from '../../../components/place-card/place-card';
import { BaseOffer, OfferShort } from '../../../types/offer.ts';

interface OfferListProps {
  offers: OfferShort[];
  onCardHover?: (offer: BaseOffer | undefined) => void;
}

function OfferList({ offers, onCardHover }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          isFavorite={offer.isFavorite}
          isPremium={offer.isPremium}
          rating={offer.rating}
          previewImage={offer.previewImage || 'default-image.png'}
          onMouseEnter={() => onCardHover?.(offer)}
          onMouseLeave={() => onCardHover?.(undefined)}
        />
      ))}
    </div>
  );
}

export default OfferList;
