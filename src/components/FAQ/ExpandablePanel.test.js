import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ExpandablePanel } from './ExpandablePanel';

const props = {};
props.title = 'Q: Who is Woobler?';
props.children = <div>A: A very special lad</div>;
props.icon = 'an icon';

describe('expandablePanel.js', ()=>{
  describe('ExpandablePanel()', ()=>{
    describe('GIVEN: The page loads', ()=>{
      describe('AND: The user clicks on the icon once', ()=>{
        it('THEN: the panel opens.', ()=>{
          render(<ExpandablePanel {...props}/>);
          const icon = screen.getByTestId('icon');
          const children = screen.getByTestId('children');

          expect(children).toHaveClass('expandable-panel__content hidden');

          fireEvent.click(icon);

          expect(children).toHaveClass('expandable-panel__content ');
        });
      });
      describe('AND: The user clicks on the icon twice', ()=>{
        it('THEN: the panel opens on the first click and closes on the second.', ()=>{
          render(<ExpandablePanel {...props}/>);
          const icon = screen.getByTestId('icon');
          const children = screen.getByTestId('children');

          expect(children).toHaveClass('expandable-panel__content hidden');

          fireEvent.click(icon);

          expect(children).toHaveClass('expandable-panel__content ');

          fireEvent.click(icon);

          expect(children).toHaveClass('expandable-panel__content hidden');
        });
      });
    });
  });
});
