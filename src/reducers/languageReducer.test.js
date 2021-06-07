import languageReducer from './languageReducer';
import { CHINESE, RUSSIAN, ENGLISH } from '../actions/types';

describe('languageReducer.js reducer:', ()=>{
  describe('When invoked with a valid action type such as CHINESE, ', ()=>{
    test('it handles the action and returns "chinese".', ()=>{
      const action = {
        type: CHINESE,
        payload: 'chinese'
      };
      const newState = languageReducer(undefined, action);
      expect(newState).toEqual('chinese');
    });
    test('AND: It does the same for english.', ()=>{
      const action = {
        type: ENGLISH,
        payload: 'english'
      };
      const newState = languageReducer(undefined, action);
      expect(newState).toEqual('english');
    });
    test('AND: It does the same for russian.', ()=>{
      const action = {
        type: RUSSIAN,
        payload: 'russian'
      };
      const newState = languageReducer(undefined, action);
      expect(newState).toEqual('russian');
    });
    describe('When invoked with an invalid type, ', ()=>{
      test('it handles the action and returns the default state.', ()=>{
        const action = {
          type: 'CRAP',
          payload: 'crap'
        };
        const newState = languageReducer(undefined, action);
        expect(newState).toEqual('english');
      });
    });
  });
});
