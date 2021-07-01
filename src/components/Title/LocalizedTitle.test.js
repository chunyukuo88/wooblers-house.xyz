import React from 'react';
import { render, screen } from '@testing-library/react';
import { LocalizedTitle } from './LocalizedTitle';

describe('LocalizedTitle.js', ()=>{
  describe('LocalizedTitle()', ()=>{
    describe('GIVEN: Props containing a language and a localized string,', ()=>{
      it('THEN: The component renders the title string properly.', ()=>{
        const props = {
          language: 'chinese',
          localizedString: '测试测试',
        };
        render(
          <LocalizedTitle {...props}/>
        );
        const localizedTitleString = screen.getByTestId('title-string');
        expect(localizedTitleString).toHaveTextContent(props.localizedString);
      });
      it('THEN: And it works in English.', ()=>{
        const props = {
          language: 'english',
          localizedString: 'test test',
        };
        render(
          <LocalizedTitle {...props}/>
        );
        const localizedTitleString = screen.getByTestId('title-string');
        expect(localizedTitleString).toHaveTextContent(props.localizedString);
      });
      it('THEN: And it works in any other language.', ()=>{
        const props = {
          language: 'gibberish',
          localizedString: 'asdfasdfasdf',
        };
        render(
          <LocalizedTitle {...props}/>
        );
        const localizedTitleString = screen.getByTestId('title-string');
        expect(localizedTitleString).toHaveTextContent(props.localizedString);
      });
    });
  });
});
