import { Display } from '../Display';
import { fireEvent, render, screen } from '@testing-library/react';

const props = {
  photosObject: {
    Contents: [],
  },
};


describe('Display()', ()=>{
  beforeEach(()=>{
    props.photosObject.Contents = [
      { photo: 0 },
      { photo: 1 },
      { photo: 2 },
      { photo: 3 },
    ];
  });
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
  describe('WHEN: There are no photos, ', ()=>{
    beforeEach(() => {
      props.photosObject.Contents = [];
    });
    it('THEN: The default photo length is set to zero and a Come Back Later message is shown.', ()=>{
      render(<Display {...props}/>);
      const noPhotosMessage = screen.getByTestId('no-photos-message');

      expect(noPhotosMessage).toBeDefined();
    });
    it('AND: The photo display and arrows disappear.', ()=>{
      render(<Display {...props}/>);
      const leftArrow = document.querySelector('#left-arrow');

      const rightArrow = document.querySelector('#right-arrow');

      expect(leftArrow).toBeNull();
      expect(rightArrow).toBeNull();
    });
  });
});
