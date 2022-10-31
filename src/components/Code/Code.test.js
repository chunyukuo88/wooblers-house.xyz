import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from '../../Root.js';
import Code from './Code.jsx';
import staticStrings from '../../StaticStrings';

const initialState = {
  language: 'english',
};

const { code } = staticStrings;

describe('Code.jsx', ()=>{
  describe('WHEN: The component has loaded with the initial language state set', ()=>{
    it.each`
      language         | translation
      ${'english'}     | ${code.english}
      ${'chinese'}     | ${code.chinese}
      ${'russian'}     | ${code.russian}
    `('THEN: The code string for $language is displayed.', ({ language, translation })=>{
      initialState.language = language;
      render(
        <Root initialState={initialState}>
          <Code />
        </Root>
      );
      const codeString = screen.queryByTestId('code');

      expect(codeString).toHaveTextContent(translation);
    });
  });
});
