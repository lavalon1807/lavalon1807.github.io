import React from 'react';
import {LoadRatingComment} from './LoadRatingComment';
import {starsRating} from '../../mocks/offer';

const RatingComments = ({onChangeRating}) => {

  return (
    starsRating.map((it) =>
      <LoadRatingComment it={it} key={it.id} onChangeRating={onChangeRating}/>
    )
  );
};

export {RatingComments};
