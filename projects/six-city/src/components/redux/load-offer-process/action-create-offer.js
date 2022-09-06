import {ActionType} from '../action';

export const loadOffer = (city, data) => ({
  type: ActionType.LOAD_DATA,
  payloadCity: city,
  payloadData: data
});

export const loadOneOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadNearby = (data) => ({
  type: ActionType.LOAD_NEARBY,
  payload: data,
});
