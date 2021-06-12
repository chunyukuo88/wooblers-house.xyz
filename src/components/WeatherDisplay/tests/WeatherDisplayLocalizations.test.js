import {
    EnglishWeatherDisplay,
    ChineseWeatherDisplay,
    RussianWeatherDisplay,
} from '../WeatherDisplayLocalizations';
import { render } from '@testing-library/react';
// import Root from '../../Root';

const initialState = {
    language: 'english',
};

const props = {
  temp: 100,
  humidity: 50,
};

describe('WeatherDisplayLocalizations.js', ()=>{
  describe('EnglishWeatherDisplay.js', ()=>{
    describe('GIVEN: Temperature and humidity values,', ()=>{
      it('THEN: It returns the language-appropriate string.', ()=>{
        const expectedTextContent = '100°F and 50% humidity';

        const component = render(<EnglishWeatherDisplay {...props}/>);
        const content = component.getByTestId('content-wrapper');

        expect(content).toHaveTextContent(expectedTextContent);
      });
    });
  });
});
