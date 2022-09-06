import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {WIDTH, userAuth} from '../../mocks/constants';
import {sendFavorites} from '../redux/api-create';

const DataProp = (props) => {
  const {items} = props;
  const {
    isPremium,
    title,
    rating, type,
    bedrooms,
    maxAdults,
    price,
    id,
  } = items;

  const {data} = useSelector((state) => state.OFFER);
  const {authorizationStatus} = useSelector((state) => state.LOAD_AUTH);

  const dispatch = useDispatch();

  const bookMark = data[id - 1].isFavorite ? `property__bookmark-button--active` : ``;
  const widthRating = rating * WIDTH;
  const statusFavor = data[id - 1].isFavorite ? 0 : 1;
  const noAuth = authorizationStatus !== userAuth.AUTH ? `/login` : `/property/${id}`;

  const addFavoriteFromPreview = () => {
    dispatch(sendFavorites({
      ids: id,
      status: statusFavor,
      datas: data,
    }));
  };

  return (
    <>

      {isPremium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <Link to={noAuth}>
          <button
            className={`property__bookmark-button button ${bookMark}`}
            type="button"
            onClick={addFavoriteFromPreview}
          >
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </Link>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${widthRating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>

    </>
  );
};

DataProp.propTypes = {
  items: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })
};

export {DataProp};
export default DataProp;
