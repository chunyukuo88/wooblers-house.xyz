import { goToPage } from '../navActionCreators'
import * as types from '../types';

const history = [];
const page = '/some-page';

describe('The goToPage action creator', ()=>{
  describe('GIVEN: A page and history array', () => {
    it('THEN: It returns the GO_TO_PAGE type.', ()=>{
      const result = goToPage(page, history);

      expect(result.type).toEqual(types.GO_TO_PAGE);
    });
    it('AND: It returns a payload with the given page.', ()=>{
      const action = goToPage(page, history);

      expect(action.payload).toEqual(page);
    });
    it('AND: The history is updated with the given page.', ()=>{
      goToPage(page, history);

      expect(history[0]).toEqual(page);
    });
  });
});
