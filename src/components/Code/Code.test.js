import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from '../../Root.js';
import Code from './Code.jsx';

const initialState = {
  language: 'english',
};

describe('Code.jsx', ()=>{
  describe('GIVEN: The component has loaded with the default initial state', ()=>{
    it('THEN: Displays the English code string.', ()=>{
      render(
        <Root initialState={initialState}>
          <Code />
        </Root>
      );
      const codeString = screen.queryByTestId('code');

      expect(codeString).toHaveTextContent('Github');
    });
  });
  describe('GIVEN: The component has loaded with the initial language state set to Chinese', ()=>{
    it('THEN: Displays the Chinese code string.', ()=>{
      initialState.language = 'chinese'
      render(
        <Root initialState={initialState}>
          <Code />
        </Root>
      );
      const codeString = screen.queryByTestId('code');

      expect(codeString).toHaveTextContent('代碼');
    });
  });
  describe('GIVEN: The component has loaded with the initial language state set to Russian', ()=>{
    it('THEN: Displays the Russian code string.', ()=>{
      initialState.language = 'russian'
      render(
        <Root initialState={initialState}>
          <Code />
        </Root>
      );
      const codeString = screen.queryByTestId('code');

      expect(codeString).toHaveTextContent('Код');
    });
  });
});
