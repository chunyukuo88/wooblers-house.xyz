import { faqButtonHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

jest.mock('../../actionCreators/navActionCreators');

describe('utils.js', ()=>{
  describe('faqButtonHandler()', ()=>{
    describe('WHEN: A dispatch function and a history array', ()=>{
      it('THEN: The function dispatches an the goToPage action creator with the correct route and the history array.', ()=>{
        goToPage.mockImplementation(jest.fn());
        const dispatch = jest.fn();
        const history = [];

        faqButtonHandler(dispatch, history);

        expect(goToPage).toHaveBeenCalledWith(routes.faq, history);
      });
    });
  });
});

