import { Display } from '../Display';
import { fireEvent, render, screen } from '@testing-library/react';

const props = {
  photosObject: {
    Contents: [
      { photo: 0 },
      { photo: 1 },
      { photo: 2 },
      { photo: 3 },
    ],
  },
};


describe('Display()', ()=>{
  describe('GIVEN: The component has loaded,', ()=>{
    it('THEN: The first photograph is displayed.', ()=>{
      render(<Display {...props}/>);
      const displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/1 (Custom).JPG');
    });
  });
  describe('WHEN: The user clicks the right arrow', ()=>{
    it('THEN: The next photograph is revealed.', ()=>{
      render(<Display {...props}/>);
      const rightArrow = screen.getByTestId('right-arrow');

      fireEvent.click(rightArrow);
      const displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/2 (Custom).JPG');
    });
  });
  describe('WHEN: The user clicks the left arrow after viewing the second photo,', ()=>{
    it('THEN: The first photo is revealed.', ()=>{
      render(<Display {...props}/>);
      const rightArrow = screen.getByTestId('right-arrow');
      const leftArrow = screen.getByTestId('left-arrow');

      let displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/1 (Custom).JPG');

      fireEvent.click(rightArrow);
      displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/2 (Custom).JPG');

      fireEvent.click(leftArrow);
      displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/1 (Custom).JPG');
    });
  });
  describe('WHEN: The user clicks the left arrow while viewing the first photo', ()=>{
    it('THEN: It cycles back to the last photo.', ()=>{
      render(<Display {...props}/>);
      const leftArrow = screen.getByTestId('left-arrow');

      fireEvent.click(leftArrow);
      const displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/4 (Custom).JPG');
    });
  });
  describe('WHEN: The user clicks the right arrow and there are no more photos', ()=>{
    it('THEN: It cycles back to the first photo.', ()=>{
      render(<Display {...props}/>);
      const rightArrow = screen.getByTestId('right-arrow');

      fireEvent.click(rightArrow);
      fireEvent.click(rightArrow);
      fireEvent.click(rightArrow);
      let displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/4 (Custom).JPG');

      fireEvent.click(rightArrow);
      displayedImage = screen.getByTestId('photo');

      expect(displayedImage).toHaveClass('www.mock-photo-source.com/1 (Custom).JPG');
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
