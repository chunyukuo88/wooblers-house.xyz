import React from 'react';
import { render } from '@testing-library/react';
import AboutModal from '../AboutModal.js';
import Root from '../../../Root';

const initialState = {
  language: 'english',
};

describe('AboutModal.js', ()=>{
  it('The component loads properly.', ()=>{
    const { container } = render(
      <Root initialState={initialState}>
        <AboutModal />
      </Root>
    );

    expect(container).toBeDefined();
  });
});
