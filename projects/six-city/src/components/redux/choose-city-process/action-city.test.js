import {ActionType} from '../action';
import {actionCity} from './action-city';

it(`ActionCity work is correctly`, () => {
  const cityRich = {
    city: `Paris`
  };

  const expectcityRich = {
    type: ActionType.CHOOSE_CITY,
    payload: cityRich
  };

  expect(actionCity(cityRich)).toEqual(expectcityRich);
});
