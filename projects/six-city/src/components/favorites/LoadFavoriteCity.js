import React from 'react';
import {CityFavorite} from './CityFavorite';

const LoadFavoriteCity = ({massFavor}) => {
  const cities = massFavor.reduce((appacity, currentValue) => {
    return [...appacity, currentValue.city.name];
  }, []);

  const unicumCities = [...new Set(cities)];

  return (
    unicumCities.map((item, index)=><CityFavorite key={index} item={item} massFavor={massFavor}/>)
  );
};

export {LoadFavoriteCity};
