import Copyright from './Copyright.js';
import { render, screen, fireEvent } from '@testing-library/react';
import { copyrightStringHandler } from './utils';
import Root from '../../Root';

const initialState = {
    language: 'english',
};

jest.mock('./utils');

describe('Copyright.js', ()=>{
  describe('WHEN: The component loads,', ()=>{
     it('THEN: The year shown is the current year.', ()=>{
       const thisYear = new Date().getFullYear();

       render(
         <Root initialState={initialState}>
           <Copyright />
         </Root>
       );
       const currentYear = screen.getByTestId('current-year');

       expect(currentYear).toHaveTextContent(thisYear);
     });
  });
  describe('WHEN: The language is set to Chinese,', ()=>{
     it('THEN: The 年 character appears at the end of the string.', ()=>{
       initialState.language = 'chinese';
       render(
         <Root initialState={initialState}>
           <Copyright />
         </Root>
       );
       const 年 = screen.getByTestId('chinese-char-for-year');

       expect(年).toBeDefined();
       expect(年).toHaveTextContent('年');
     });
  });
  describe('WHEN: The language is NOT set to Chinese,', ()=>{
     it('THEN: The 年 character is not present at the end of the string.', ()=>{
       initialState.language = 'russian';
       render(
         <Root initialState={initialState}>
           <Copyright />
         </Root>
       );
       const 年 = screen.getByTestId('chinese-char-for-year');

       expect(年).not.toHaveTextContent('年');
     });
  });
  describe('WHEN: The copyrightString is clicked,', ()=>{
    it('THEN: The handler that updates global state is invoked.', ()=>{
      copyrightStringHandler.mockImplementation(jest.fn());
      render(
        <Root initialState={initialState}>
          <Copyright />
        </Root>
      );
      const copyrightString = screen.getByTestId('copyright-string');

      fireEvent.click(copyrightString);

      expect(copyrightStringHandler).toHaveBeenCalledTimes(1);
    });
  });
});
