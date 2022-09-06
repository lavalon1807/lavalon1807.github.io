import React from 'react';

const PicturePlace = ({items}) => {
  const {images} = items;

  return (
    images.slice(0, 6).map((image)=>
      <div key={image.toString()} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    )
  );
};

export default PicturePlace;
