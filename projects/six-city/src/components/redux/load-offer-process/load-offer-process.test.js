// import MockAdapter from 'axios-mock-adapter';
import {loadOffer, initialState} from './load-offer-process';
import {ActionType} from '../action';
// import {fetchOfferList} from '../api-create';
// import {createAPI} from '../../api';

// const api = createAPI(() => {});

describe(`Load cards`, () => {
  it(`Reducer return load cards of initialState`, () => {
    expect(loadOffer(undefined, {})).toEqual(initialState);
  });

  it(`Reduce return load cards all`, () => {
    const data = 1;
    const city = `Paris`;

    const state = {data: {}, city: {}};

    const firstloadOffer = () => ({
      type: ActionType.LOAD_DATA,
      payloadCity: city,
      payloadData: data
    });

    expect(loadOffer(state, firstloadOffer(city, data))).toEqual({city, data, isDataLoaded: true});
  });

  it(`Reduce return load cards one`, () => {
    const oneOffer = 1;

    const state = {oneOffer: {}};

    const loadOneOffer = (offer) => ({
      type: ActionType.LOAD_OFFER,
      payload: offer,
    });

    expect(loadOffer(state, loadOneOffer(oneOffer))).toEqual({oneOffer, isLoaded: true});
  });

  it(`Reduce return load cards nearby`, () => {
    const sentence = {
      id: 1
    };

    const state = {sentence: {}};

    const loadNearby = (data) => ({
      type: ActionType.LOAD_NEARBY,
      payload: data,
    });

    expect(loadOffer(state, loadNearby(sentence))).toEqual({sentence});
  });
});

// describe(`Async load offer all and one and more data`, () => {
//   it(`Should make a correct API call to ALL /hotels`, () => {
//     const apiMock = new MockAdapter(api);
//     const dispatch = jest.fn();
//     const fetchOfferListLoader = fetchOfferList();

//     apiMock
//       .onGet(`/hotels`)
//       .reply(200, [{fake: true}]);

//     return fetchOfferListLoader(dispatch, () => {}, api)
//       .then(() => {
//         expect(dispatch).toHaveBeenCalledTimes(1);
//         expect(dispatch).toHaveBeenNthCalledTimes(1, {
//           type: ActionType.LOAD_DATA,
//           payloadCity: [{fake: true}],
//           payloadData: [{fake: true}],
//         });
//       });
//   });
// });
