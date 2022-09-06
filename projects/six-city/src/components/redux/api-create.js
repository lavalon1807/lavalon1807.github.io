import {userAuth} from '../../mocks/constants';
import {loadData, loadDataFavorite, loadOfferOne, loadOfferNearby, loadCommentsForReview} from './change-data-api';
import {requireAuthorization} from './user-process/action-user';

export const fetchOfferList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`).then((data) => {
    dispatch(loadData(data.data, data.data));
  });
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(`hotels/${id}`)
    .then((data) => {
      dispatch(loadOfferOne(data.data));
    });
};

export const sendFavorites = ({ids, status, datas}) => (dispatch, _getState, api) => {
  api.post(`/favorite/${ids}/${status}`, {ids, status})
    .then((data)=>{
      dispatch(loadData(datas, data.data));
    });
};

export const fetchFavorites = () => (dispatch, _getState, api) => {
  api.get(`/favorite`).then((data)=>{
    dispatch(loadDataFavorite(data.data));
  });
};

export const fetchNearby = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then((data) => {
      dispatch(loadOfferNearby(data.data));
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=>dispatch(requireAuthorization(userAuth.NO_AUTH)))
    .catch(()=>{})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(()=> dispatch(requireAuthorization(userAuth.AUTH, email)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=> dispatch(requireAuthorization(userAuth.NO_AUTH)))
);


export const takeComments = (ids) => (dispatch, getState, api) => {
  return api.get(`/comments/${ids}`)
    .then((data)=>{
      dispatch(loadCommentsForReview(data.data, ids));
    });
};

export const sendComments = ({ids, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${ids}`, {comment, rating})
    .then((data) => dispatch(loadCommentsForReview(data.data, ids)))
);
