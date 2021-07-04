import { Faq } from './Faq.jsx';
import { render, screen } from '@testing-library/react';
import staticStrings from '../../StaticStrings.js';
import Root from  '../../Root';

const initialState = { language: 'english', };

describe('Faq()', ()=>{
  it('The page displays properly.', ()=>{
    const { container } = render(
      <Root initialState={initialState}>
        <Faq/>
      </Root>
    );
    expect(container).toBeDefined();
  });
  it('The page displays properly in Chinese.', ()=>{
    initialState.language = 'chinese';
    render(
      <Root initialState={initialState}>
        <Faq/>
      </Root>
    );
    const faqContainer = screen.getByTestId('faq-page-container');
    const expectedText = staticStrings.faqComingSoon.chinese;

    expect(faqContainer).toHaveTextContent(expectedText);
  });

});
