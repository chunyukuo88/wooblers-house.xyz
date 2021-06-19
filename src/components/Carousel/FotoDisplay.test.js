import FotoDisplay from './FotoDisplay';
import { render, screen } from '@testing-library/react';
import { getFotos } from './photoCount';

jest.mock('./photoCount');


describe('FotoDisplay()', ()=>{
  it('SANITY TEST: Component loads without crashing', ()=>{
    const { container } = render(<FotoDisplay />);
    expect(container).toBeDefined();
  });

  describe('GIVEN: The page has loaded,', ()=>{
    describe('WHEN: The page has loaded,', ()=>{
      it('THEN: It dynamically displays the images based on the number of images in the back end,', ()=>{
        getFotos.mockImplementation(() => 9);
        render(<FotoDisplay />);
        const images = screen.getByTestId('image');

        expect(images.length).toEqual(getFotos() - 1);
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
});
