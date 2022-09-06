import React from 'react';
import Sort from './sort';
import {ratingName} from '../mocks/offer';

const SortingCards = (props) => {
  const {addSort, onclick} = props;

  return (
    ratingName.map((it) =>
      <Sort
        key={it}
        items={it}
        rating={addSort}
        onclick={onclick}
      />
    )
  );
};

export default SortingCards;
