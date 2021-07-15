import ReactGa from 'react-ga';
import { fireGoogleAnalyticsEvent } from '../reactGa';

describe('reactGa.js', ()=>{
  describe('fireGoogleAnalyticsEvent()', ()=>{
    describe('WHEN: Given "category" and "action" strings, ', ()=>{
      it('THEN: It dispatches the event to GA via ReactGA.', ()=>{
        const spy = jest.spyOn(ReactGa, 'event');
        const categoryStr = 'Click - Navigation';
        const actionStr = 'User navigated to FAQ page.';
        const expectedParams = {
          category: categoryStr,
          action: actionStr,
        };

        fireGoogleAnalyticsEvent(categoryStr, actionStr);

        expect(spy).toHaveBeenCalledWith(expectedParams);
      });
    });
  });
});
