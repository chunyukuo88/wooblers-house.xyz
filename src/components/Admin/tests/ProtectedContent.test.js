import { render, screen } from '@testing-library/react';
import { ProtectedContent } from '../ProtectedContent.jsx';

jest.mock('../utils');

describe('ProtectedContent.jsx', ()=>{
  describe('ProtectedContent()', ()=>{
    it('The content loads properly.', ()=>{
      render(<ProtectedContent/>);
      const loggedInSection = screen.getByTestId('logged-in-section');

      expect(loggedInSection).toBeInTheDocument();
    });
  });
});
