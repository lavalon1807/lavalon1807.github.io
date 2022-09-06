import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {WIDTH, userAuth} from '../../../mocks/constants';
import {sendFavorites} from '../../redux/api-create';

const Neiborhood = ({items}) => {
  const {
    rating,
    previewImage,
    price,
    title,
    type,
    id,
  } = items;

  const {authorizationStatus} = useSelector((state) => state.LOAD_AUTH);
  const {data} = useSelector((state) => state.OFFER);

  const params = useParams();
  const currentId = Number(params.id);
  const dispatch = useDispatch();

  const bookMark = data[id - 1].isFavorite ? `place-card__bookmark-button--active` : ``;
  const widthRating = rating * WIDTH;
  const statusFavor = data[id - 1].isFavorite ? 0 : 1;
  const noAuth = authorizationStatus !== userAuth.AUTH ? `/login` : `/property/${currentId}`;
  const URLCurrentCard = `/property/${id}`;

  const startPage = () => {
    window.scrollTo(0, 0);
  };

  const addFavoriteFromNeiborhood = () => {
    dispatch(sendFavorites({
      ids: id,
      status: statusFavor,
      datas: data,
    }));
  };

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
              className={`place-card__bookmark-button button ${bookMark}`}
              type="button"
              onClick={addFavoriteFromNeiborhood}
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
            <span style={{width: `${widthRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={URLCurrentCard} onClick={startPage}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Neiborhood.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isFavorite,
  })
};

export {Neiborhood};
export default Neiborhood;
