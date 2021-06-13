import { EnglishWeatherDisplay } from '../WeatherDisplayLocalizations';
import { render } from '@testing-library/react';
import Root from '../../../Root';

const initialState = { language: 'english' };

const props = {
  degreesKelvin: 273.15,
  humidity: 50,
  isCelsius: false,
};

describe('WeatherDisplayLocalizations.js', ()=>{
  describe('EnglishWeatherDisplay.js', ()=>{
    describe('GIVEN: Temperature and humidity values,', ()=>{
      it('THEN: It returns the language-appropriate string.', ()=>{
        const expectedTextContent = '32°F and 50% humidity';

        const component = render(
          <Root initialState={initialState}>
              <EnglishWeatherDisplay {...props}/>
          </Root>
        );
        const content = component.getByTestId('content-wrapper');

        expect(content).toHaveTextContent(expectedTextContent);
      });
    });
  });
});
