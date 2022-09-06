import React from 'react';
import PropTypes from 'prop-types';

const LoadRatingComment = ({it, onChangeRating}) => {
  const onChangeRatingComment = () => {
    onChangeRating(it.id);
  };

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={it.id}
        type="radio"
        onChange={onChangeRatingComment}
      />
      <label htmlFor={it.id} className="reviews__rating-label form__rating-label" title={it.state}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

LoadRatingComment.propTypes = {
  it: PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onChangeRating: PropTypes.func.isRequired,
};

export {LoadRatingComment};
