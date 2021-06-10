import Copyright from './Copyright.js';
import {getByTestId, render, screen} from '@testing-library/react';
import Root from '../../Root';

describe('Copyright.jsx', ()=>{
    describe('It loads without crashing.', ()=>{
        it('', ()=>{
            const initialState = {
                language: 'english',
            };
          const { container } = render(
              <Root initialState={initialState}>
                  <Copyright />
              </Root>
          );
          expect(container).toBeDefined();
        });
    });
    describe('WHEN: The component loads,', ()=>{
       it('THEN: The year shown is the current year.', ()=>{
           const initialState = {
               language: 'english',
           };
           const thisYear = new Date().getFullYear();

           render(
               <Root initialState={initialState}>
                   <Copyright />
               </Root>
           );
           const currentYear = screen.getByTestId('current-year');

           expect(currentYear).toHaveTextContent(thisYear);
       });
    });
});