import { Faq } from '../Faq.jsx';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { backButtonHandler } from '../utils';
import Root from '../../../Root';

jest.mock('../utils');

const initialState = { language: 'english', };

beforeEach(()=>{
  cleanup();
  backButtonHandler.mockImplementation(jest.fn());
  render(
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
  describe('WHEN: The user clicks on one row, then immediately clicks that same row again', ()=>{
    it('THEN: After the first click, the answer is visible. After the second, it is hidden again.', ()=>{
      const firstRow = document.querySelectorAll('.expandable-panel__question')[0];
      let allAnswers = screen.getAllByTestId('answer');
      assertAllDropdownsAreClosed(allAnswers);

      fireEvent.click(firstRow);
      let firstAnswer = allAnswers[0];

      expect(firstAnswer).toHaveClass('expandable-panel__answer ');

      fireEvent.click(firstRow);
      firstAnswer = allAnswers[0];

      expect(firstAnswer).toHaveClass('expandable-panel__answer hidden');
    });
  });
  describe('WHEN: The user clicks on one row, then immediately clicks another row', ()=>{
    it('THEN: the answer to that row\'s question becomes hidden again.', async ()=>{
      const firstRow = document.querySelectorAll('.expandable-panel__question')[0];
      const secondRow = document.querySelectorAll('.expandable-panel__question')[1];
      let firstAnswer = screen.getAllByTestId('answer')[0];
      let secondAnswer = screen.getAllByTestId('answer')[1];

      expect(firstAnswer).toHaveClass('expandable-panel__answer hidden');
      expect(secondAnswer).toHaveClass('expandable-panel__answer hidden');

      fireEvent.click(firstRow);
      fireEvent.click(secondRow);
      firstAnswer = screen.getAllByTestId('answer')[0];
      secondAnswer = screen.getAllByTestId('answer')[1];

      expect(firstAnswer).toHaveClass('expandable-panel__answer hidden');
      expect(secondAnswer).toHaveClass('expandable-panel__answer ');
    });
  });
});

const assertAllDropdownsAreClosed = (arrayOfAnswers) => {
  arrayOfAnswers.forEach((answer) => {
    expect(answer).toHaveClass('expandable-panel__answer hidden');
  });
}
