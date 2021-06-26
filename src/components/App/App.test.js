import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Root from '../../Root';
import App from './App';
import ReactGa from 'react-ga';

const initialState = {
    language: 'english',
};

jest.mock('react-ga');

describe('App.js', ()=>{
  describe('WHEN: The app has loaded', ()=>{
    it('THEN: It renders the App component without crashing, ', ()=>{
      const { container } = render(
        <Root initialState={initialState}>
            <App/>
        </Root>
      );
      expect(container).toBeDefined();
    });
    it('THEN: The ReactGA methods are executed.', ()=>{
      render(
        <Root initialState={initialState}>
            <App/>
        </Root>
      );
      expect(ReactGa.initialize).toHaveBeenCalledTimes(1);
      expect(ReactGa.pageview).toHaveBeenCalledTimes(1);
    });
  });
  describe('WHEN: The user clicks the link to FAQs', ()=>{
    it('THEN: They get routed to the FAQs page.', ()=>{
      render(
        <Root initialState={initialState}>
          <App/>
        </Root>
      );
      const faqsLink = screen.getByTestId('faqs-link');
      let photoDisplay = screen.getByTestId('photo-display');

      expect(photoDisplay).toBeDefined();

      fireEvent.click(faqsLink);
      photoDisplay = screen.getByTestId('photo-display');

      expect(photoDisplay).toBeUndefined();
    });
  });
});
