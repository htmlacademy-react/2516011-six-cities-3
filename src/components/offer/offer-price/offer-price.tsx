interface OfferPriceProps {
  price: number;
}

function OfferPrice({ price }: OfferPriceProps){
  return (
    <div className="offer__price">
      <b className="offer__price-value">&euro;{price}</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}

export default OfferPrice;
