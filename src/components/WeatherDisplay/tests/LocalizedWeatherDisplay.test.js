import { LocalizedWeatherDisplay } from '../LocalizedWeatherDisplay';
import { render } from '@testing-library/react';
import Root from '../../../Root';

const props = {
  degreesK: 273.15,
  humidity: 50,
};

describe('LocalizedWeatherDisplay.js', ()=>{
  describe('LocalizedWeatherDisplay.js', ()=>{
    describe('GIVEN: Temperature and humidity values,', ()=>{
      describe('WHEN: The language is set to English,', ()=>{
        it('THEN: It returns the English string with degrees set to Fahrenheit.', ()=>{
          const initialState = { language: 'english' };
          const expectedTextContent = 'Temperature: 32°F Humidity: 50%';

          const component = render(
            <Root initialState={initialState}>
                <LocalizedWeatherDisplay {...props}/>
            </Root>
          );
          const content = component.getByTestId('content-wrapper');

          expect(content).toHaveTextContent(expectedTextContent);
        });
      });
      describe('WHEN: The language is set to Chinese,', ()=>{
        it('THEN: It returns the Chinese string with degrees set to Celsius.', ()=>{
          const initialState = { language: 'chinese' };
          const expectedTextContent = '溫度：0°C 濕度：50%';

          const component = render(
            <Root initialState={initialState}>
                <LocalizedWeatherDisplay {...props}/>
            </Root>
          );
          const content = component.getByTestId('content-wrapper');

          expect(content).toHaveTextContent(expectedTextContent);
        });
      });
      describe('WHEN: The language is set to Russian,', ()=>{
        it('THEN: It returns the Russian string with degrees set to Celsius.', ()=>{
          const initialState = { language: 'russian' };
          const expectedTextContent = 'Температура: 0°C Влажность: 50%';

          const component = render(
            <Root initialState={initialState}>
                <LocalizedWeatherDisplay {...props}/>
            </Root>
          );
          const content = component.getByTestId('content-wrapper');

          expect(content).toHaveTextContent(expectedTextContent);
        });
      });
    });
  });
});
