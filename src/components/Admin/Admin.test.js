import Admin from './Admin.jsx';
import { render } from '@testing-library/react';
import Root from '../../Root';

const initialState = {
  language: 'english',
};

describe('Admin.jsx', ()=>{
  describe('GIVEN: The component loads, ', ()=>{
    it('THEN: The component loads, ', ()=>{
      const { container } = render(
        <Root initialState={initialState}>
          <Admin/>
        </Root>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
