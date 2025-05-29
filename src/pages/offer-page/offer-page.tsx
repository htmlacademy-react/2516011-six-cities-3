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
import OfferComments from '../../components/offer/offer-reviews/offer-comments.tsx';
import ReviewsForm from '../../components/offer/offer-reviews-form/offer-reviews-form';
import Map from '../../components/map/Map.tsx';
import NearPlaces from '../../components/offer/offer-near-places/offer-near-places';
import Spinner from '../../components/spinner/spinner';

import { AppRoutes } from '../../utils/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {fetchOfferById, fetchNearbyOffers, fetchComments} from '../../store/api-actions';
import {
  getComments,
  getCurrentOffer,
  getIsCurrentOfferLoading,
  getIsOfferNotFound,
  getNearbyOffers
} from '../../store/offer/selectors.ts';

function OfferPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(getCurrentOffer);
  const comments = useAppSelector(getComments);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const isLoading = useAppSelector(getIsCurrentOfferLoading);
  const isOfferNotFound = useAppSelector(getIsOfferNotFound);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchComments(id));
    }
  }, [id, dispatch]);

  if (!id || isOfferNotFound) {
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
              <OfferTitle id={offer.id} title={offer.title} isPremium={offer.isPremium}/>
              <OfferRating rating={offer.rating}/>
              <OfferFeatures type={offer.type} bedrooms={offer.bedrooms} maxAdults={offer.maxAdults}/>
              <OfferPrice price={offer.price}/>
              <OfferInside goods={offer.goods}/>
              <OfferHost host={offer.host} description={offer.description}/>
              <section className="offer__reviews reviews">
                <OfferComments comments={comments}/>
                <ReviewsForm offerId={id}/>
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
