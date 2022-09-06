import React from 'react';
import Review from './Review';

const ReviewsLoader = ({commentsMap}) => {

  return (
    commentsMap.map((item) => <Review key={item.id} items={item} />)
  );
};

export {ReviewsLoader};
export default ReviewsLoader;
