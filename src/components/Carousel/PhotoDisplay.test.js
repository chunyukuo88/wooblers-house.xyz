import PhotoDisplay from './PhotoDisplay';
import { render, screen, act } from '@testing-library/react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

import { getPhotos } from './photoCount';
import Root from '../../Root';
import staticStrings from '../../StaticStrings';

jest.mock('./photoCount');
const mockPhotosObject = {
  Contents: [
    { Key: '1 (Custom).JPG' },
    { Key: '2 (Custom).JPG' },
    { Key: '3 (Custom).JPG' },
  ],
};
const { errorLoadingPhotos } = staticStrings;
const initialState = { language: 'english', };


it('SANITY TEST: Component loads without crashing', ()=>{
  const { container } = render(
      <Root initialState={initialState}>
        <PhotoDisplay />
      </Root>
    );
  expect(container).toBeDefined();
});

describe('PhotoDisplay()', ()=>{
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
              <PhotoDisplay />
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
  describe('GIVEN: The page has loaded,', ()=>{
    describe('AND: An error prevents the photos from loading,', ()=>{
      getPhotos.mockImplementation(() => 'foo');

      it('THEN: An error message displays instead of the photos.', ()=>{
        render(
          <Root initialState={initialState}>
            <PhotoDisplay />
          </Root>
        );
        const errorMessage = screen.getByTestId('error-message');
        expect(errorMessage).toBeDefined();
        expect(errorMessage).toHaveTextContent(errorLoadingPhotos.english);
      });
      it('THEN: Localized error messages display properly.', ()=>{
        initialState.language = 'chinese';
        render(
          <Root initialState={initialState}>
            <PhotoDisplay />
          </Root>
          );
        const errorMessage = screen.getByTestId('error-message');
        expect(errorMessage).toHaveTextContent(errorLoadingPhotos.chinese);
      });
    });
  });
});
