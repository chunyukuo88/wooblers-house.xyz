import { Faq } from '../Faq.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import { backButtonHandler } from '../utils';
import Root from '../../../Root';
import faqContent from '../faqContent.json';


jest.mock('../utils');

const initialState = { language: 'english', };
const numberOfFaqs = faqContent.secure.length;

describe('Faq()', ()=>{
  it('It renders the number of Q&A pairs properly.', ()=>{
    render(
      <Root initialState={initialState}>
        <Faq/>
      </Root>
    );
    const faqContent = screen.getAllByTestId('qa-pair');

    expect(faqContent.length).toEqual(numberOfFaqs);
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
