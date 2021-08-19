import AdminPage from '../AdminPage.jsx';
import { render } from '@testing-library/react';

describe('AdminPage.jsx', ()=>{
  describe('GIVEN: The component loads, ', ()=>{
    it('THEN: The component loads, ', ()=>{
      render(<AdminPage/>);

      const amplifyContainer = document.querySelector('amplify-container');

      expect(amplifyContainer).toBeDefined();
    });
  });
});
