import { Display } from './Display';
import { render, screen } from '@testing-library/react';
import Root from '../../Root';
import staticStrings from '../../StaticStrings';

const { errorLoadingPhotos } = staticStrings;
const initialState = { language: 'english', };

describe('Display()', ()=>{
  describe('GIVEN: The component has loaded,', ()=>{
    describe('AND: An error prevents the photos from loading,', ()=>{
      it('THEN: An error message displays instead of the photos.', ()=>{
        render(
          <Root initialState={initialState}>
            <Display />
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
            <Display />
          </Root>
        );
        const errorMessage = screen.getByTestId('error-message');
        expect(errorMessage).toHaveTextContent(errorLoadingPhotos.chinese);
      });
    });
  });
});
