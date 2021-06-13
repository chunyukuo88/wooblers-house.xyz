import WeatherDisplay, { WeatherTitle } from '../WeatherDisplay';
import { render, fireEvent } from '@testing-library/react';
import Root from '../../../Root';

const initialState = { language: 'english' };

describe('WeatherDisplay.js', ()=>{
  it('should load without crashing', ()=>{
    const { container } = render(
      <Root initialState={initialState}>
        <WeatherDisplay />
      </Root>
    );

    expect(container).toBeDefined();
  });
  describe('WHEN: The page loads, ', ()=>{
    it('THEN: The weather title loads.', ()=>{
      const expectedTextContent = 'Westerville Weather';
      const container = render(
        <Root initialState={initialState}>
          <WeatherDisplay />
        </Root>
      );
      const weatherTitle = container.getByTestId('weather-title');

      expect(weatherTitle).toHaveTextContent(expectedTextContent);
    });
  });
  describe('WHEN: The user clicks the weather title, ', ()=>{
    it('THEN: The weather string loads.', ()=>{
      const expectedTextContent = 'Temperature: 36°F Humidity: 50%';

      const container = render(
        <Root initialState={initialState}>
          <WeatherDisplay />
        </Root>
      );
      const weatherTitle = container.getByTestId('weather');
      fireEvent.click(weatherTitle);
      const weatherTitleAgain = container.getByTestId('weather'); // This has to be re-queried after the click.

      expect(weatherTitleAgain).toHaveTextContent(expectedTextContent);
    });
  });
});
