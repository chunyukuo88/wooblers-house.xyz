import navigationReducer from './navigationReducer';
import * as actions from '../actions/actionCreators';

describe('navigationReducer', ()=>{
  describe('GIVEN: An action and a state', ()=>{
    it('THEN: It invokes the function that takes the user to the page given in the state object.', ()=>{
      const page = '/some-page';
      const history = [];
      const action = actions.goToPage(page, history);
      const state = {
        globalNavLocation: '/',
      };

      const result = navigationReducer(state, action);
      const expectedResult = {
        globalNavLocation: page,
      };
      expect(result).toEqual(expectedResult);
    });
  });
  describe('GIVEN: An invalid action', ()=>{
    it('THEN: It invokes the function that takes the user to the index page.', ()=>{
      const action = {};

      const result = navigationReducer(undefined, action);
      const expectedResult = {
        globalNavLocation: '/',
      };
      expect(result).toEqual(expectedResult);
    });
  });
});
