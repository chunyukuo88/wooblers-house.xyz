import WeatherDisplay from '../WeatherDisplay';
import { render } from '@testing-library/react';
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
});
