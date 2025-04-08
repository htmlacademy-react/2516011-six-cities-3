interface Image {
  id: string;
  url: string;
}

interface Props {
  images: Image[];
}

function OfferGallery({ images }: Props) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div className="offer__image-wrapper" key={image.id}>
            <img className="offer__image" src={image.url} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default OfferGallery;
