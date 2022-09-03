import React from 'react';
import { render } from '@testing-library/react';
import * as weather from '../../actionCreators/weatherActionCreators';
import { getPhotos } from '../Carousel/utils';
import Root from '../../Root';
import App from './App';

jest.mock('react-ga');
jest.mock('../Carousel/utils');

const initialState = {
  language: 'english',
};
const mockPhotosObject = {
  Contents: [
    { Key: '1 (Custom).JPG' },
    { Key: '2 (Custom).JPG' },
    { Key: '3 (Custom).JPG' },
  ],
};

describe('App.js', () => {
  describe('WHEN: The app loads,', () => {
    it('THEN: It makes API calls to get global weather condition data.', async () => {
      getPhotos.mockResolvedValueOnce(() => mockPhotosObject);
      const humidityFn = jest.spyOn(weather, 'getGlobalHumidity');
      const tempFn = jest.spyOn(weather, 'getGlobalTemp');
      render(
        <Root initialState={initialState}>
           <App />
         </Root>
      );

      expect(humidityFn).toBeCalledTimes(1);
      expect(tempFn).toBeCalledTimes(1);
    });
  });
});
