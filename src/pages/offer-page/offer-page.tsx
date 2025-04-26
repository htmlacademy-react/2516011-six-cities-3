import { useParams, Navigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/const';

import Header from '../../components/header/header';
import OfferGallery from '../../components/offer/offer-gallery/offer-gallery';
import OfferTitle from '../../components/offer/offer-title/offer-title';
import OfferRating from '../../components/offer/offer-rating/offer-rating';
import OfferFeatures from '../../components/offer/offer-features/offer-features';
import OfferPrice from '../../components/offer/offer-price/offer-price';
import OfferInside from '../../components/offer/offer-inside/offer-inside';
import OfferHost from '../../components/offer/offer-host/offer-host';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews';
import OfferMap from '../../components/offer/offer-map/offer-map';
import ReviewsForm from '../../components/offer/offer-reviews-form/offer-reviews-form';
//import NearPlaces from '../../components/offer/offer-near-places/offer-near-places';

import { OfferFull } from '../../types/offer';
import { Review } from '../../types/reviews';

interface Props {
  fullOffers: OfferFull[];
  reviews: Review[];
  /*offers: OfferShort[];
  * Тут я сохраню сигнатурку для себя, чтобы потом не забыть добавить
  * OffersNearby уже через Redux. А пока оно только мешает
  * */
}

function OfferPage({fullOffers, reviews}: Props) {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={AppRoutes.NOT_FOUND} />;
  }

  const selectedOffer = fullOffers.find((offer) => offer.id === id);

  if (!selectedOffer) {
    return <Navigate to={AppRoutes.NOT_FOUND} />;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={selectedOffer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferTitle title={selectedOffer.title} isPremium={selectedOffer.isPremium} isFavorite={selectedOffer.isFavorite}/>
              <OfferRating rating={selectedOffer.rating}/>
              <OfferFeatures type={selectedOffer.type} bedrooms={selectedOffer.bedrooms} maxAdults={selectedOffer.maxAdults}/>
              <OfferPrice price={selectedOffer.price}/>
              <OfferInside goods={selectedOffer.goods}/>
              <OfferHost host={selectedOffer.host} description={selectedOffer.description}/>
              <section className="offer__reviews reviews">
                <OfferReviews reviews={reviews}/>
                <ReviewsForm/>
              </section>
            </div>
          </div>
          <OfferMap location={selectedOffer.location}/>
        </section>
        <div className="container">
          {/*<NearPlaces offers={offers}/>*/}
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
