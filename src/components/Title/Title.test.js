import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';
import Root from '../../Root';

const initialState = { language: 'english', };

describe('Title.js', ()=>{
  describe('On load,', ()=>{
    test('the Title component renders without crashing.', ()=>{
      const { container } = render(
        <Root initialState={initialState}>
          <Title/>
        </Root>
      );
      expect(container).toBeDefined();
    });
  });
  describe('When the global language state changes to Chinese', ()=>{
    test('the Chinese title is displayed', ()=>{
      initialState.language = 'chinese';
      render(
        <Root initialState={initialState}>
          <Title/>
        </Root>
      );
      const title = screen.getByTestId('title');
      expect(title).toHaveTextContent('小巫之屋');
    });
  });
});
