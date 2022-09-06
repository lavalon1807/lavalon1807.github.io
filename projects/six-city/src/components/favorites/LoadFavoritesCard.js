import React from 'react';
import {FavoritCards} from './FavoritCards';

const LoadFavoritesCard = ({massFav, city}) => {
  massFav = massFav.filter((item) => item.city.name === city);

  return (
    massFav.map((item) => <FavoritCards key={item.id} items={item} />)
  );
};

export {LoadFavoritesCard};
export default LoadFavoritesCard;
