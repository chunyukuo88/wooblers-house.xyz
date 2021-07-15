import { backButtonHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';

jest.mock('../../actionCreators/navActionCreators');
jest.mock('../../common/reactGa');

describe('utils.js', ()=>{
  describe('backButtonHandler()', ()=>{
    const dispatch = jest.fn();
    const history = [];
    beforeEach(() => {
      jest.clearAllMocks();
    });
    describe('WHEN: given a dispatch function and a history array,', ()=>{
      it('THEN: The function dispatches an the goToPage action creator with the correct route and the history array.', ()=>{
        goToPage.mockImplementation(jest.fn());

        backButtonHandler(dispatch, history);

        expect(goToPage).toHaveBeenCalledWith(routes.index, history);
      });
      it('THEN: The event is dispatched to Google Analytics via fireGoogleAnalyticsEvent().', ()=>{
        fireGoogleAnalyticsEvent.mockImplementation(jest.fn());
        const categoryStr = 'Click - Navigation';
        const actionStr = 'User navigated to main page from FAQ page.';

        backButtonHandler(dispatch, history);

        expect(fireGoogleAnalyticsEvent).toHaveBeenCalledWith(categoryStr, actionStr);
      });
    });
  });
});
