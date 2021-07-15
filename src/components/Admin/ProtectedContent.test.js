import { render } from '@testing-library/react';
import { ProtectedContent } from './ProtectedContent.jsx';

it('The content loads properly.', ()=>{
  const { container } = render(
    <ProtectedContent/>
  );

  expect(container).toBeInTheDocument();
});
