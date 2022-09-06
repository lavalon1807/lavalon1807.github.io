import React from 'react';
import PropTypes from 'prop-types';
import {LoadFavoritesCard} from './LoadFavoritesCard';

const CityFavorite = ({item, massFavor}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link">
            <span>{item}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        <LoadFavoritesCard massFav={massFavor} city={item}/>
      </div>

    </li>
  );
};

CityFavorite.propTypes = {
  item: PropTypes.string.isRequired,
  massFavor: PropTypes.array.isRequired,
};

export {CityFavorite};
