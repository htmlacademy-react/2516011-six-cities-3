import React from 'react';

interface Props {
  images: string[];
}

function OfferGallery({ images }: Props) {
  const imageKeys = React.useMemo(() => images.map(() => crypto.randomUUID()), [images]);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image, index) => (
          <div className="offer__image-wrapper" key={imageKeys[index]}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default OfferGallery;
