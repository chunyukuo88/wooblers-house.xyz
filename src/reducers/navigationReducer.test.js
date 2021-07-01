import navigationReducer from './navigationReducer';
import { goToPage } from '../actionCreators/navActionCreators';
import { routes } from '../routes';

describe('navigationReducer', ()=>{
  describe('GIVEN: An action and a state', ()=>{
    it('THEN: It invokes the function that takes the user to the page given in the state object.', ()=>{
      const page = '/some-page';
      const history = [];
      const action = goToPage(page, history);
      const state = {
        globalNavLocation: routes.index,
      };

      const result = navigationReducer(state, action);
      const expectedResult = page;

      expect(result).toEqual(expectedResult);
    });
  });
  describe('GIVEN: An invalid action', ()=>{
    it('THEN: It invokes the function that takes the user to the index page.', ()=>{
      const action = {};

      const result = navigationReducer(undefined, action);
      const expectedResult = {
        globalNavLocation: routes.index,
      };
      expect(result).toEqual(expectedResult);
    });
  });
});
