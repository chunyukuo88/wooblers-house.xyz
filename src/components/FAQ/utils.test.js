import { backButtonHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

jest.mock('../../actionCreators/navActionCreators');

describe('utils.js', ()=>{
  describe('backButtonHandler()', ()=>{
    describe('WHEN: given a dispatch function and a history array,', ()=>{
      it('THEN: The function dispatches an the goToPage action creator with the correct route and the history array.', ()=>{
        goToPage.mockImplementation(jest.fn());

        const dispatch = jest.fn();
        const history = [];

        backButtonHandler(dispatch, history);

        expect(goToPage).toHaveBeenCalledWith(routes.index, history);
      });
    });
  });
});
