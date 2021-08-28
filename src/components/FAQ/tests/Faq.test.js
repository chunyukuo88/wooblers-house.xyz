import { Faq } from '../Faq.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import staticStrings from '../../../StaticStrings.js';
import { backButtonHandler } from '../utils';
import Root from '../../../Root';

const initialState = { language: 'english', };

jest.mock('../utils');

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
  it('It renders the number of Q&A pairs properly.', ()=>{
    const { container } = render(
      <Root initialState={initialState}>
        <Faq/>
      </Root>
    );
    const faqContentLength = container.secure.length;
    const renderedTopics = container.querySelectorAll('faq__topics');

    expect(renderedTopics.length).toEqual(faqContentLength);
  });
  describe('WHEN: The user clicks the button to go back to the main page,', ()=>{
    it('THEN: The handler that updates global state is invoked.', ()=>{
      backButtonHandler.mockImplementation(jest.fn());
      render(
        <Root initialState={initialState}>
          <Faq/>
        </Root>
      );
      const back = screen.getByTestId('back-button');

      fireEvent.click(back);

      expect(backButtonHandler).toHaveBeenCalledTimes(1);
    });
  });
});
