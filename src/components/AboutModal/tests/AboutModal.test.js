import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
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
  describe('WHEN: the user clicks on the translucent overlay,', () => {
    it('THEN: the callback to close the modal is invoked.', () => {
      const props = {
        setModalIsVisible: jest.fn(),
      }
      render(
        <Root initialState={initialState}>
          <AboutModal {...props}/>
        </Root>
      );
      const translucentOverlay = document.querySelector('.translucent-overlay');

      fireEvent.click(translucentOverlay);

      expect(props.setModalIsVisible).toBeCalledTimes(1);
    });
  });
});
