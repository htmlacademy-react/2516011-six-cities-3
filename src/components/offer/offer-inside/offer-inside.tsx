interface OfferInsideProps {
  goods: string[];
}

function OfferInside({ goods }: OfferInsideProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good, index) => (
          <li className="offer__inside-item" key={index}>{good}</li>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
