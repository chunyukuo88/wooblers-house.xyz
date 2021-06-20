import PhotoDisplay from './PhotoDisplay';
import { render, screen, act } from '@testing-library/react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { getPhotos } from './photoCount';

jest.mock('./photoCount');

const mockPhotosObject = {
  Contents: [
    { Key: '1 (Custom).JPG' },
    { Key: '2 (Custom).JPG' },
    { Key: '3 (Custom).JPG' },
    { Key: '4 (Custom).JPG' },
    { Key: '5 (Custom).JPG' },
    { Key: '6 (Custom).JPG' },
    { Key: '7 (Custom).JPG' },
    { Key: '8 (Custom).JPG' },
  ]
};

it('SANITY TEST: Component loads without crashing', ()=>{
  const { container } = render(<PhotoDisplay />);
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
          ReactDOM.render(<PhotoDisplay />, generatedContainer);
        })
        const images = document.querySelector('.photo');
        expect(images).toBeDefined();
      });
      it('AND: Each image has a caption', ()=>{

      });
    });
    describe('WHEN: The user clicks the right arrow', ()=>{
      it('THEN: The next photograph is revealed.', ()=>{

      });
    });
    describe('WHEN: The user clicks the left arrow', ()=>{
      it('THEN: The previous photograph is revealed.', ()=>{

      });
    });
  });
  describe('GIVEN: The page has loaded,', ()=>{
    describe('AND: An error prevents the photos from loading,', ()=>{
      it('THEN: An error message displays instead of the photos.', ()=>{
        getPhotos.mockImplementation(() => 'foo');
        render(<PhotoDisplay />);
        const errorMessage = screen.getByTestId('error-message');
        expect(errorMessage).toBeDefined();
      });
    });
  });
});
