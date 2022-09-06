import {ActionType} from '../action';
import {loadOffer, loadOneOffer, loadNearby} from './action-create-offer';

describe(`Action creator offer-load work correctly`, () => {
  it(`Loadoffer is work`, () => {
    const city = [`Paris`];
    const cards = {
      1: {id: 1},
      2: {id: 2}
    };

    const data = {
      city,
      cards
    };
    const expectLoadOffer = {
      type: ActionType.LOAD_DATA,
      payloadCity: city,
      payloadData: data
    };

    expect(loadOffer(city, data)).toEqual(expectLoadOffer);
  });

  it(`LoadOneoffer is work`, () => {
    const offer = {
      city: `Paris`,
      id: 1
    };

    const expectLoadOneoffer = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(loadOneOffer(offer)).toEqual(expectLoadOneoffer);
  });

  it(`LoadNearby is work`, () => {
    const cards = {
      1: {id: 1},
      2: {id: 2}
    };

    const data = [
      {
        cards
      }
    ];

    const expectLoadNearby = {
      type: ActionType.LOAD_NEARBY,
      payload: data,
    };

    expect(loadNearby(data)).toEqual(expectLoadNearby);
  });
});
