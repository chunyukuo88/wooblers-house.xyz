import globalHumidityReducer from './globalHumidityReducer';
import { FETCH_HUMIDITY } from '../actionCreators/types';

describe('globalHumidityReducer.js', ()=>{
  describe('When invoked with the valid action type FETCH_HUMIDITY', ()=>{
    test('It sets the global humidity state.', ()=>{
      const dispatchedHumidity = 75;
      const action = {
        type: FETCH_HUMIDITY,
        payload: {
          globalHumidity: dispatchedHumidity
        }
      };
      const expectedPayload = {
        globalHumidity: dispatchedHumidity
      }

      const updatedState = globalHumidityReducer(undefined, action);

      expect(updatedState).toEqual(expectedPayload);
    });
  });
  describe('When invoked with an invalid action type', ()=>{
    const action = { invalid: 'this is an invalid action'};
    const expectedPayload = { globalHumidity: 50 };

    const updatedState = globalHumidityReducer(undefined, action);

    expect(updatedState).toEqual(expectedPayload);
  });
});
