import FotoDisplay from './FotoDisplay';
import { render } from '@testing-library/react';




describe('FotoDisplay()', ()=>{
  it('SANITY TEST: Component loads without crashing', ()=>{
    const { container } = render(<FotoDisplay />);
    expect(container).toBeDefined();
  });

  describe('GIVEN: The page has loaded,', ()=>{
    describe('WHEN: The page has loaded,', ()=>{
      it('THEN: It dynamically displays the images based on the number of images in the back end,', ()=>{

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
