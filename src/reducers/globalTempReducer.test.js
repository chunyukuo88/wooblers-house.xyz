import globalTempReducer from './globalTempReducer';
import { FETCH_TEMP } from '../actionCreators/types';

describe('globalTempReducer.js:', ()=>{
  describe('When invoked with the valid action type GLOBAL_TEMP', ()=>{
    test('It sets the global temperature state.', ()=>{
      const dispatchedTemp = 40;
      const action = {
        type: FETCH_TEMP,
        payload: {
          globalTemp: dispatchedTemp
        }
      };
      const expectedPayload = { globalTemp: dispatchedTemp };
      const newState = globalTempReducer(undefined, action);
      expect(newState).toEqual(expectedPayload);
    });
  });
  describe('When invoked with an invalid action type', ()=>{
    test('It handles the action and returns the default state', ()=>{
      const action = {
        invalid: 'this is an invalid action',
      };
      const newState = globalTempReducer(undefined, action);
      const expectedPayload = {'globalTemp': 45};
      expect(newState).toEqual(expectedPayload);
    });
  });
});
