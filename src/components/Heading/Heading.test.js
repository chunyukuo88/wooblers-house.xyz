import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Heading from './Heading';
import Root from '../../Root';
import { faqButtonHandler, locButtonHandler } from './utils';

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
    it('THEN: The handler responsible for changing the language is invoked.', ()=>{
      locButtonHandler.mockImplementation(jest.fn())
      initialState.language = 'english';
      render(
        <Root initialState={initialState}>
          <Heading />
        </Root>
      );
      const language = screen.getByTestId('language');

      fireEvent.click(language);

      expect(locButtonHandler).toHaveBeenCalledTimes(1);
      expect(locButtonHandler).toHaveBeenCalledWith('english', expect.any(Function));
    });
  });
  describe('WHEN: The user clicks the "Welcome" text,', () => {
    it('THEN: The modal pops up.', () => {
      initialState.language = 'english';
      const props = {
        setModalIsVisible: jest.fn()
      };
      render(
        <Root initialState={initialState}>
          <Heading {...props}/>
        </Root>
      );
      const welcomeString = document.querySelector('#nav-items__welcome');

      fireEvent.click(welcomeString);

      expect(props.setModalIsVisible).toBeCalledTimes(1);
    });
  });
});
