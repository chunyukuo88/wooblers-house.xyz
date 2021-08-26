import { render, fireEvent, screen } from '@testing-library/react';
import { ProtectedContent } from '../ProtectedContent.jsx';
import { backButtonHandler } from '../utils';
import Root from '../../../Root';

jest.mock('../utils');

const initialState = { language: 'english', };

describe('ProtectedContent.jsx', ()=>{
  describe('ProtectedContent()', ()=>{
    it('The content loads properly.', ()=>{
      render(
        <Root initialState={initialState}>
          <ProtectedContent/>
        </Root>
      );
      const loggedInSection = screen.getByTestId('logged-in-section');

      expect(loggedInSection).toBeInTheDocument();
    });
    it('The content loads properly.', ()=>{
      render(
        <Root initialState={initialState}>
          <ProtectedContent/>
        </Root>
      );
      const loggedInSection = screen.getByTestId('logged-in-section');

      expect(loggedInSection).toBeInTheDocument();
    });
    it('The button to return to the main page is there.', ()=>{
      render(
        <Root initialState={initialState}>
          <ProtectedContent/>
        </Root>
      );
      const backButton = screen.getByTestId('back-to-main');

      expect(backButton).toBeInTheDocument();
    });
  });
  describe('WHEN: The user clicks the button to return to the main page', ()=>{
    it('THEN: The click handler triggers the dispatcher that takes them there.', ()=>{
      backButtonHandler.mockImplementation(jest.fn());

      render(
        <Root initialState={initialState}>
          <ProtectedContent/>
        </Root>
      );
      const backButton = screen.getByTestId('back-to-main');

      fireEvent.click(backButton);

      expect(backButtonHandler).toHaveBeenCalledTimes(1);
    });
  });
});
