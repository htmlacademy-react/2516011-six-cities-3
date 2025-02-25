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
import NearPlaces from '../../components/offer/offer-near-places/offer-near-places';

import { reviews } from '../../mocks/reviews';
import { offers } from '../../mocks/offers';

// Берем первые три элемента (пока из массива offers для примера)
const nearPlaces = offers.slice(0, 3);

interface Props {
  offer: {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    images: string[];
    maxAdults: number;
  };
}

function OfferPage({ offer }: Props) {
  const { id } = useParams();

  if (!id || offer.id !== id) {
    return <Navigate to={AppRoutes.NOT_FOUND} />; // Перенаправляем на 404
  }

  return (
    <div className="page">
      <Header/>
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
          <OfferMap location={offer.location}/>
        </section>
        <div className="container">
          <NearPlaces offers={nearPlaces}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
