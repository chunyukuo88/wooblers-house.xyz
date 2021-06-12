import React from 'react';
import { getDegreesC, getDegreesF } from './utils';

export const EnglishWeatherDisplay = (props) => {
  const { language, degreesKelvin, humidity, isCelsius } = props;
  return (
      <div className={language} data-testid='content-wrapper' >
        <span>{getDegrees(isCelsius, degreesKelvin)}°F </span>and {humidity}% humidity
      </div>
  );
};

const getDegrees = (isCelsius, degreesKelvin) => isCelsius
  ? getDegreesC(degreesKelvin)
  : getDegreesF(degreesKelvin);

