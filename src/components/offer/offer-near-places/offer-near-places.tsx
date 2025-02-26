import PlaceCard from '../../place-card/place-card';
import { PlaceCardProps } from '../../../types/card';

interface Props {
  offers: PlaceCardProps[];
}

function NearPlaces({ offers }: Props) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
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
            previewImage={offer.previewImage}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
