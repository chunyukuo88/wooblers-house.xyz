import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Root from '../../Root';
import App from './App';

jest.mock('react-ga');
jest.mock('../Carousel/utils');

const initialState = {
  language: 'english',
};
const mockPhotosObject = {
  Contents: [
    { Key: '1 (Custom).JPG' },
    { Key: '2 (Custom).JPG' },
    { Key: '3 (Custom).JPG' },
  ],
};

describe('App.js', () => {
  describe('WHEN: The user clicks the Welcome option, then clicks outside of it,', () => {
    it('THEN: The modal becomes visible then disappears again.', async () => {
      render(
        <Root initialState={initialState}>
          <App />
        </Root>
      );
      const welcomeButton = document.getElementById('nav-items__welcome');
      fireEvent.click(welcomeButton);
      let modal = screen.getByText('...to my trilingual photo album.');

      expect(modal).toBeVisible();

      const overlay = document.querySelector('.translucent-overlay');

      fireEvent.click(overlay);
      modal = screen.queryByText('...to my trilingual photo album.');

      expect(modal).not.toBeInTheDocument();
    });
  });
});
