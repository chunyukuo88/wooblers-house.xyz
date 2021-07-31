import Admin from './Admin.jsx';
import { render } from '@testing-library/react';

describe('Admin.jsx', ()=>{
  describe('GIVEN: The component loads, ', ()=>{
    it('THEN: The component loads, ', ()=>{
      render(<Admin/>);
      const amplifySignOut = document.querySelector('amplify-container');

      expect(amplifySignOut).toBeInTheDocument();
    });
  });
});
