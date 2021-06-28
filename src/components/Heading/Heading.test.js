import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Heading from './Heading';
import Root from '../../Root';


const initialState = {
  language: 'english',
};

describe('Heading.js', ()=>{
  describe('WHEN: The user clicks the FAQs button, ', ()=>{
    it('THEN: The global state is updated accordingly.', ()=>{
      const { container } = render(
        <Root initialState={initialState}>
          <Heading />
        </Root>
      );
      const faqs = screen.getByTestId('faqs');

      fireEvent.click(faqs);

      expect(container).toBeDefined();
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
