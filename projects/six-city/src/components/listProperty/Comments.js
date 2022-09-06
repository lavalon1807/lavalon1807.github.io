import React, {useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {RatingComments} from './RatingComments';
import {sendComments} from '../redux/api-create';


const Comments = () => {
  const commentRef = useRef();
  const [ratings, setRating] = useState();
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useDispatch();

  const onChangeRating = (it) => {
    setRating(it);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (commentRef.current.value !== ``) {
      dispatch(sendComments({
        ids: id,
        comment: commentRef.current.value,
        rating: ratings,
      }));

      commentRef.current.value = ``;
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        <RatingComments onChangeRating={onChangeRating}/>

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        type="text"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}>
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >Submit</button>
      </div>
    </form>
  );
};

export {Comments};
export default Comments;
