import {chooseCity} from './choose-city-process';
import {actionCity} from './action-city';

describe(`Action city work correctly`, () => {
  it(`Return initialState without params`, () => {
    expect(chooseCity(undefined, {})).toEqual({currentCity: `Paris`});
  });

  it(`Reducer should current city`, () => {
    const state = {currentCity: `Paris`};
    const cityRich = {
      city: `Amsterdam`
    };

    expect(chooseCity(state, actionCity(cityRich)))
      .toEqual({currentCity: cityRich});
  });
});
