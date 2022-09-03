import WeatherDisplay, { WeatherTitle } from '../WeatherDisplay';
import { fetchJsonData } from '../../../common/restClient';
import { render, fireEvent, screen } from '@testing-library/react';
import Root from '../../../Root';

jest.mock('../../../common/restClient');

const initialState = { language: 'english' };

describe('WeatherDisplay.js', ()=>{
  afterEach(()=>{
    fetchJsonData.mockClear();
  });
  describe('WHEN: The user clicks the weather title, ', ()=>{
    it('THEN: The fetched weather data is set in the component.', async ()=>{
      const expectedTextContent = 'Temperature: 54°F Humidity: 37%';
      fetchJsonData.mockImplementation(()=> {
        return {
          main: {
            temp: 285,   // 285°K = 54°F
            humidity: 37,
          },
        };
      });
      render(
        <Root initialState={initialState}>
          <WeatherDisplay />
        </Root>
      );
      const weatherTitle = await screen.findByTestId('weather');

      fireEvent.click(weatherTitle);

      const weatherAfterUserClicks = await screen.findByTestId('weather');
      expect(weatherAfterUserClicks).toHaveTextContent(expectedTextContent);
    });
  });
});
