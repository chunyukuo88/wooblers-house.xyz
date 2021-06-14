import React from 'react';
import { Welcome } from './Welcome';
import { render } from '@testing-library/react';
import Root from '../../Root';

const initialState = {
  language: 'english',
};

describe('AboutModal.js', ()=>{
  describe('WHEN: The page loads,', ()=>{
    it('The welcome string is displayed.', ()=>{
      const container = render(
        <Root initialState={initialState}>
          <Welcome />
        </Root>
      );
      const welcomeString = container.getByTestId('welcome-string');

      expect(welcomeString).toHaveTextContent('Welcome');
    });
  });
  describe('WHEN: The page loads in another language,', ()=>{
    it('The welcome string of that language is displayed.', ()=>{
      const initialState = {
        language: 'chinese',
      };
      const container = render(
        <Root initialState={initialState}>
          <Welcome />
        </Root>
      );
      const welcomeString = container.getByTestId('welcome-string');

      expect(welcomeString).toHaveTextContent('簡介');
    });
  });
});
