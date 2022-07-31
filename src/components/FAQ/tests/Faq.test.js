import { Faq } from '../Faq.jsx';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import { backButtonHandler } from '../utils';
import Root from '../../../Root';
import userEvent from "@testing-library/user-event";

jest.mock('../utils');

const initialState = { language: 'english', };
// const numberOfFaqs = allQaPairs.secure.length;

beforeEach(()=>{
  cleanup();
  backButtonHandler.mockImplementation(jest.fn());
  const { debug } = render(
    <Root initialState={initialState}>
      <Faq/>
    </Root>
  );
});
describe('Faq()', ()=>{
  describe('WHEN: The user clicks the button to go back to the main page,', ()=>{
    it('THEN: The handler that updates global state is invoked.', ()=>{
      const back = screen.getByTestId('back-button');

      fireEvent.click(back);

      expect(backButtonHandler).toHaveBeenCalledTimes(1);
    });
  });
  describe('WHEN: The user clicks on one icon, then immediately clicks on a second icon,', ()=>{
    it('THEN: the second dropdown opens,', async ()=>{
      const icons = screen.getAllByTestId('icon');
      const answers = screen.getAllByTestId('answer');

      assertAllDropdownsAreClosed(answers);

      await userEvent.click(icons[0]);

      expect(await answers[0]).not.toHaveClass('expandable-panel__answer hidden');
      //
      // expect(answer).toHaveClass('expandable-panel__answer ');
      //
      // fireEvent.click(icon);
      //
      // expect(answer).toHaveClass('expandable-panel__answer hidden');
    });
    it('AND: the first dropdown closes.', ()=>{
      //
    });
  });
});

const assertAllDropdownsAreClosed = (arrayOfAnswers) => {
  arrayOfAnswers.forEach((answer) => {
    expect(answer).toHaveClass('expandable-panel__answer hidden');
  });
}