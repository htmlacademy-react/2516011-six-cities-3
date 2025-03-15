import { useState } from 'react';
import PlaceCard from '../../../components/place-card/place-card';
import { OfferShort } from '../../../types/offer.ts';

interface OfferListProps {
  offers: OfferShort[];
}

function OfferList({ offers }: OfferListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeOfferId, setActiveOfferId] = useState<string | null>(null);

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
          onMouseEnter={setActiveOfferId}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OfferList;
