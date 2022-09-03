import AllPhotos from '../AllPhotos';
import {cleanup, render, screen} from '@testing-library/react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { getPhotos } from '../utils';
import Root from '../../../Root';

jest.mock('../utils');
const mockPhotosObject = {
  Contents: [
    { Key: '1 (Custom).JPG' },
    { Key: '2 (Custom).JPG' },
    { Key: '3 (Custom).JPG' },
  ],
};

const initialState = { language: 'english', };

describe('WHEN: The component loads,', ()=>{
  it('', async ()=>{
    getPhotos.mockResolvedValueOnce(() => mockPhotosObject);

    render(
      <Root initialState={initialState}>
        <AllPhotos />
      </Root>
    );
    const images = await screen.findByTestId('photo');

    expect(images).toBeInTheDocument();
  });
});
