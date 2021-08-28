import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ExpandablePanel } from '../ExpandablePanel';

const props = {};
props.question = 'Q: Who is Woobler?';
props.answer = <div>A: A very special lad</div>;
props.icon = 'an icon';

describe('expandablePanel.js', ()=>{
  describe('ExpandablePanel()', ()=>{
    describe('GIVEN: The page loads', ()=>{
      describe('AND: The user clicks on the icon once', ()=>{
        it('THEN: the panel opens.', ()=>{
          render(<ExpandablePanel {...props}/>);
          const icon = screen.getByTestId('icon');
          const answer = screen.getByTestId('answer');

          expect(answer).toHaveClass('expandable-panel__answer hidden');

          fireEvent.click(icon);

          expect(answer).toHaveClass('expandable-panel__answer ');
        });
      });
      describe('AND: The user clicks on the icon twice', ()=>{
        it('THEN: the panel opens on the first click and closes on the second.', ()=>{
          render(<ExpandablePanel {...props}/>);
          const icon = screen.getByTestId('icon');
          const answer = screen.getByTestId('answer');

          expect(answer).toHaveClass('expandable-panel__answer hidden');

          fireEvent.click(icon);

          expect(answer).toHaveClass('expandable-panel__answer ');

          fireEvent.click(icon);

          expect(answer).toHaveClass('expandable-panel__answer hidden');
        });
      });
    });
  });
});
