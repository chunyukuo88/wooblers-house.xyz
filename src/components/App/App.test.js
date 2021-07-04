import React from 'react';
import { render, } from '@testing-library/react';
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
});
