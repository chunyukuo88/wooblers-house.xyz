import AllPhotos from '../AllPhotos';
import { render, act } from '@testing-library/react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

import { getPhotos } from '../utils';
import Root from '../../../Root';

jest.mock('./utils');
const mockPhotosObject = {
  Contents: [
    { Key: '1 (Custom).JPG' },
    { Key: '2 (Custom).JPG' },
    { Key: '3 (Custom).JPG' },
  ],
};

const initialState = { language: 'english', };

it('SANITY TEST: Component loads without crashing', ()=>{
  const { container } = render(
      <Root initialState={initialState}>
        <AllPhotos />
      </Root>
    );
  expect(container).toBeDefined();
});

describe('AllPhotos()', ()=>{
  describe('GIVEN: The page has loaded,', ()=>{
    let generatedContainer;
    beforeEach(() => {
      generatedContainer = document.createElement('div');
      document.body.appendChild(generatedContainer);
    });
    afterEach(() => {
      unmountComponentAtNode(generatedContainer);
      generatedContainer.remove();
      generatedContainer = null;
    });

    describe('WHEN: The page has loaded,', ()=>{
      it('THEN: displays images based on the # in s3,', ()=>{
        // TODO: Further research the act() function to make this is passing for the right reason.
        getPhotos.mockImplementation(() => mockPhotosObject);
        act(()=>{
          ReactDOM.render(
            <Root initialState={initialState}>
              <AllPhotos />
            </Root>, generatedContainer);
        })
        const images = document.querySelector('.photo');
        expect(images).toBeDefined();
      });
      it('AND: Each image has a caption', ()=>{
        //
      });
    });
    describe('WHEN: The user clicks the right arrow', ()=>{
      it('THEN: The next photograph is revealed.', ()=>{
        //
      });
    });
    describe('WHEN: The user clicks the left arrow', ()=>{
      it('THEN: The previous photograph is revealed.', ()=>{
        //
      });
    });
  });

});
