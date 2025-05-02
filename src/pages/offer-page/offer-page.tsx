import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header/header';
import OfferGallery from '../../components/offer/offer-gallery/offer-gallery';
import OfferTitle from '../../components/offer/offer-title/offer-title';
import OfferRating from '../../components/offer/offer-rating/offer-rating';
import OfferFeatures from '../../components/offer/offer-features/offer-features';
import OfferPrice from '../../components/offer/offer-price/offer-price';
import OfferInside from '../../components/offer/offer-inside/offer-inside';
import OfferHost from '../../components/offer/offer-host/offer-host';
import OfferReviews from '../../components/offer/offer-reviews/offer-reviews';
import ReviewsForm from '../../components/offer/offer-reviews-form/offer-reviews-form';
import Map from '../../components/map/Map.tsx';
import NearPlaces from '../../components/offer/offer-near-places/offer-near-places';
import Spinner from '../../components/spinner/spinner';

import { AppRoutes } from '../../utils/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferById, fetchNearbyOffers } from '../../store/api-actions';

import { Review } from '../../types/reviews';


interface Props {
  reviews: Review[];
}

function OfferPage({ reviews }: Props) {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers).slice(0, 3);
  const isLoading = useAppSelector((state) => state.isCurrentOfferLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [id, dispatch]);

  if (!id) {
    return <Navigate to={AppRoutes.NOT_FOUND} />;
  }

  if (isLoading || !offer) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferTitle title={offer.title} isPremium={offer.isPremium} isFavorite={offer.isFavorite}/>
              <OfferRating rating={offer.rating}/>
              <OfferFeatures type={offer.type} bedrooms={offer.bedrooms} maxAdults={offer.maxAdults}/>
              <OfferPrice price={offer.price}/>
              <OfferInside goods={offer.goods}/>
              <OfferHost host={offer.host} description={offer.description}/>
              <section className="offer__reviews reviews">
                <OfferReviews reviews={reviews}/>
                <ReviewsForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map offers={nearbyOffers} cityLocation={offer.location} currentOffer={offer}/>
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={nearbyOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
