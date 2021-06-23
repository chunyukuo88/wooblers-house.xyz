import { Display } from './Display';
import { render, screen } from '@testing-library/react';
import staticStrings from '../../StaticStrings';

const { errorLoadingPhotos } = staticStrings;
const initialState = { language: 'english', };

describe('Display()', ()=>{
  describe('GIVEN: The component has loaded,', ()=>{
    it('THEN: The first photograph is displayed.', ()=>{
      const photosObject = {
        Contents: [
          { photo: 0 },
          { photo: 1 },
          { photo: 2 },
        ],
      };
      render(<Display {...photosObject}/>);
      const displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/1 (Custom).JPG');
    });
  });
  describe('WHEN: The user clicks the right arrow', ()=>{
    it('THEN: The next photograph is revealed.', ()=>{
      // const photosObject = {
      //   Contents: [],
      // };
      // const { container } = render(<Display {...photosObject}/>);
    });
  });
  describe('WHEN: The user clicks the left arrow', ()=>{
    it('THEN: The previous photo is revealed.', ()=>{
      //
    });
  });
  describe('WHEN: The user clicks the left arrow while viewing the first photo', ()=>{
    it('THEN: It remains at the first photo.', ()=>{
      //
    });
  });
  describe('WHEN: The user clicks the right arrow and there are no more photos', ()=>{
    it('THEN: It cycles back to the first photo.', ()=>{
      //
    });
  });
  // describe('AND: An error prevents the photos from loading,', ()=>{
  //   it('THEN: An error message displays instead of the photos.', ()=>{
  //     render(
  //       <Root initialState={initialState}>
  //         <Display />
  //       </Root>
  //     );
  //     const errorMessage = screen.getByTestId('error-message');
  //     expect(errorMessage).toBeDefined();
  //     expect(errorMessage).toHaveTextContent(errorLoadingPhotos.english);
  //   });
  //   it('THEN: Localized error messages display properly.', ()=>{
  //     initialState.language = 'chinese';
  //     render(
  //       <Root initialState={initialState}>
  //         <Display />
  //       </Root>
  //     );
  //     const errorMessage = screen.getByTestId('error-message');
  //     expect(errorMessage).toHaveTextContent(errorLoadingPhotos.chinese);
  //   });
  // });
});
