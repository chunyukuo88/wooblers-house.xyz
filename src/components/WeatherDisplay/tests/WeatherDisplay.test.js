import WeatherDisplay, { WeatherTitle } from '../WeatherDisplay';
import { fetchJsonData } from '../../../common/restClient';
import { render, fireEvent } from '@testing-library/react';
import Root from '../../../Root';

jest.mock('../../../common/restClient');

const initialState = { language: 'english' };

describe('WeatherDisplay.js', ()=>{
  afterEach(()=>{
    fetchJsonData.mockClear();
  });
  describe('WHEN: The page loads, ',  ()=>{
    it('THEN: The weather title loads.', async ()=>{
      const expectedTextContent = 'W\'ville Weather';
      const container = await render(
        <Root initialState={initialState}>
          <WeatherDisplay />
        </Root>
      );
      const weatherTitle = container.getByTestId('weather-title');

      expect(weatherTitle).toHaveTextContent(expectedTextContent);
    });
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
      const container = await render(
        <Root initialState={initialState}>
          <WeatherDisplay />
        </Root>
      );
      const weatherTitle = container.getByTestId('weather');
      fireEvent.click(weatherTitle);
      const weatherAfterUserClicks = container.getByTestId('weather');
      expect(weatherAfterUserClicks).toHaveTextContent(expectedTextContent);
    });
  });
});
