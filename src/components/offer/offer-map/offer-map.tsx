interface Props {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

function OfferMap({ location }: Props) {
  return (
    <section className="offer__map map">
      <p>{`${location.latitude}, ${location.longitude}`}</p>
      {/* Здесь будет карта с использованием location. Наверное... */}
    </section>
  );
}

export default OfferMap;
