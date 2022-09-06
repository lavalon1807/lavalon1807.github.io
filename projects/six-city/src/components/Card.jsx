import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { WIDTH, userAuth } from '../mocks/constants';
import {sendFavorites, fetchFavorites} from './redux/api-create';

const Card = (props) => {
  const {items, onMouseEnter, onMouseLeave} = props;
  const {
    isPremium,
    isFavorite,
    rating,
    previewImage,
    price,
    id,
    title,
    type,
  } = items

  const {data} = useSelector(state => state.OFFER);
  const {authorizationStatus} = useSelector(state => state.LOAD_AUTH);

  const dispatch = useDispatch();

  const favorite = isFavorite ? 'place-card__bookmark-button--active' : ''
  const statusFavor = isFavorite ? 0 : 1;

  const handleMouseEnter = () => {
    onMouseEnter(items)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
  }

  const addFavoriteCardFromMainPage = () => {
    dispatch(sendFavorites({
      ids: id,
      status: statusFavor,
      datas: data,
    }))
  }

  const noAuth = authorizationStatus !== userAuth.AUTH ? '/login' : '';

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="cities__image-wrapper place-card__image-wrapper">

      { isPremium && (
        <div className="place-card__mark">
            <span>Premium</span>
        </div>
      )}

        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Link to={noAuth}>
            <button
              className={`place-card__bookmark-button button ${favorite}`}
              type="button"
              onClick={addFavoriteCardFromMainPage}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </Link>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: WIDTH * rating + '%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/property/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  )
}

export {Card};
export default Card;
