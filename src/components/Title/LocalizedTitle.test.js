import React from 'react';
import { render, screen } from '@testing-library/react';
import { LocalizedTitle } from './LocalizedTitle';

describe('LocalizedTitle.js', ()=>{
  describe('LocalizedTitle()', ()=>{
    describe('GIVEN: Props containing a language and a localized string,', ()=>{
      it('THEN: The component renders the title string properly.', ()=>{
        const testProps = {
          language: 'chinese',
          localizedString: '测试测试',
        };
        render(
          <LocalizedTitle props={testProps}/>
        );
        const localizedTitleString = screen.getByTestId('title-string');

        expect(localizedTitleString).toHaveTextContent(testProps.localizedString);
      });
    });
  });
});
