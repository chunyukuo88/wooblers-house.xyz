import globalHumidityReducer from './globalHumidityReducer';
import { FETCH_HUMIDITY } from '../actions/types';

describe('globalHumidityReducer.js', ()=>{
  describe('When invoked with the valid action type FETCH_HUMIDITY', ()=>{
    test('It sets the global humidity state.', ()=>{
      const dispatchedHumidity = 75;
      const action = {
        type: FETCH_HUMIDITY,
        payload: {
          humidity: dispatchedHumidity
        }
      };
      const expectedPayload = {temp: dispatchedHumidity}
      const newState = globalHumidityReducer(undefined, action);
      expect(newState).toEqual(expectedPayload);
    });
  });
  describe('When invoked with an invalid action type', ()=>{
    const action = { invalid: 'this is an invalid action'};
    const newState = globalHumidityReducer(undefined, action);
    const expectedPayload = { globalHumidity: 50 };
    expect(newState).toEqual(expectedPayload);
  });
});
