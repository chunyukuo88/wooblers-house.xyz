import { copyrightStringHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

jest.mock('../../actionCreators/navActionCreators');

describe('copyrightStringHandler()', ()=>{
  describe('WHEN: Given a dispatch fn and history array', ()=>{
    it('THEN: The function dispatches an the goToPage action creator with the correct route and the history array.', ()=>{
      const dispatch = jest.fn();
      const history = [];
      goToPage.mockImplementation(jest.fn());

      copyrightStringHandler(dispatch, history);

      expect(goToPage).toHaveBeenCalledWith(routes.admin, history);
    });
  });
});
