import Admin from './Admin.jsx';
import { render } from '@testing-library/react';
// import { withAuthenticator } from '@aws-amplify/ui-react';

describe('Admin.jsx', ()=>{
  describe('GIVEN: The component loads, ', ()=>{
    it('THEN: The component loads, ', ()=>{
      /** Figure out a better way to test this, since it involves shadow dom
       * for the content as a result of the aws config etc.
      */
      render(<Admin/>);
      const amplifySignOut = document.querySelector('amplify-container');

      expect(amplifySignOut).toBeInTheDocument();
    });
  });
});
