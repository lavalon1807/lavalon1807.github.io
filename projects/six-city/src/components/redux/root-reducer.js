import {combineReducers} from 'redux';
import {loadComments} from './comments-process/comments-process';
import {loadFavorite} from './favorite-process/favorite-process';
import {auth} from './user-process/user-process';
import {loadOffer} from './load-offer-process/load-offer-process';
import {chooseCity} from './choose-city-process/choose-city-process';

export const NameSpace = {
  COMMENT: `COMMENT`,
  FAVORITE: `FAVORITE`,
  LOAD_AUTH: `LOAD_AUTH`,
  OFFER: `OFFER`,
  CITY: `CITY`,
};

export default combineReducers({
  [NameSpace.COMMENT]: loadComments,
  [NameSpace.FAVORITE]: loadFavorite,
  [NameSpace.LOAD_AUTH]: auth,
  [NameSpace.OFFER]: loadOffer,
  [NameSpace.CITY]: chooseCity,
});
