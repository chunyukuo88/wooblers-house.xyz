import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { LocalizedWeatherDisplay } from './LocalizedWeatherDisplay';
import staticStrings from '../../StaticStrings';

// TODO: Redo all of this, starting with tests.

export default function WeatherDisplay () {
  const [ degreesK, setDegreesK] = useState(275);
  const [ humidity, setHumidity ] = useState(50);
  const [ showWeather, setShowWeather ] = useState(false);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    _buildWeatherData(setDegreesK, setHumidity);
  }, []);

  const toggleDisplay = () => setShowWeather(!showWeather);

  return (
    <div onClick={toggleDisplay} className='weather'>
      <Display {...{ showWeather, language, degreesK, humidity }} />
    </div>
  );
}

const Display = ({ showWeather, language, degreesK, humidity }) => showWeather
  ? <LocalizedWeatherDisplay {...{degreesK, humidity}}/>
  : <WeatherTitle language={language}/>;

const WeatherTitle = (language) => (
  <div data-testid='weather-title' className={language.language}>
    {staticStrings.weatherLabels[language.language]}
  </div>
);

const _buildWeatherData = async (degreesSetter, humiditySetter) => {
  const fetchedWeatherData = await fetch(urls.openWeatherUrl).then(res => res.json());
  degreesSetter(fetchedWeatherData.main.temp);
  humiditySetter(fetchedWeatherData.main.humidity);
}
