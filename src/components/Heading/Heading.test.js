import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Heading from './Heading';
import Root from '../../Root';
import { faqButtonHandler } from './utils';

const initialState = {
  language: 'english',
};

jest.mock('./utils');

describe('Heading.js', ()=>{
  describe('WHEN: The user clicks the FAQs button, ', ()=>{
    it('THEN: The handler that updates global state is invoked.', ()=>{
      faqButtonHandler.mockImplementation(jest.fn());
      render(
        <Root initialState={initialState}>
          <Heading />
        </Root>
      );
      const faq = screen.getByTestId('faq');

      fireEvent.click(faq);

      expect(faqButtonHandler).toHaveBeenCalledTimes(1);
    });
  });
  describe('WHEN: The user clicks the localization button once, ', ()=>{
    it('THEN: The language switches to Chinese.', ()=>{
      render(
        <Root initialState={initialState}>
          <Heading />
        </Root>
      );
      let language = screen.getByTestId('language');

      expect(language).toHaveTextContent('English');

      fireEvent.click(language);
      language = screen.getByTestId('language');

      expect(language).toHaveTextContent('正體中文');
    });
  });
  describe('WHEN: The user clicks the localization button twice, ', ()=>{
    it('THEN: The language switches to Russian.', ()=>{
      render(
        <Root initialState={initialState}>
          <Heading />
        </Root>
      );
      let language = screen.getByTestId('language');

      fireEvent.click(language);
      fireEvent.click(language);
      language = screen.getByTestId('language');

      expect(language).toHaveTextContent('русский');
    });
  });
  describe('WHEN: The user clicks the localization button thrice, ', ()=>{
    it('THEN: The language switches back to English again.', ()=>{
      render(
        <Root initialState={initialState}>
          <Heading />
        </Root>
      );
      let language = screen.getByTestId('language');

      fireEvent.click(language);
      fireEvent.click(language);
      fireEvent.click(language);
      language = screen.getByTestId('language');

      expect(language).toHaveTextContent('English');
    });
  });
});
