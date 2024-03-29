import React from 'react';
import PropTypes from 'prop-types';

const Review = ({items}) => {
  const {comment, date, rating, user} = items;
  const {avatarUrl, name} = user;
  const widthRating = rating * 20;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${widthRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  items: PropTypes.shape({
    img: PropTypes.string.isRequire,
    user: PropTypes.shape({
      name: PropTypes.string.isRequire,
      avatarUrl: PropTypes.string.isRequire,
    }),
    comment: PropTypes.string.isRequire,
    date: PropTypes.array.isRequire,
    rating: PropTypes.number.isRequire,
  })
};

export default Review;
