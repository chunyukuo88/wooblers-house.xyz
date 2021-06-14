import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { LocalizedWeatherDisplay } from './LocalizedWeatherDisplay';
import staticStrings from '../../StaticStrings';

export default function WeatherDisplay () {
  const [ degreesK, setDegreesK] = useState(275);
  const [ humidity, setHumidity ] = useState(50);
  const [ showWeather, setShowWeather ] = useState(false);

  useEffect(() => {
    _buildWeatherData(setDegreesK, setHumidity);
  }, []);

  const toggleDisplay = () => setShowWeather(!showWeather);

  return (
    <div onClick={toggleDisplay} className='weather' data-testid='weather'>
      <Display {...{ showWeather, degreesK, humidity }} />
    </div>
  );
}

const Display = ({ showWeather, degreesK, humidity }) => showWeather
  ? <LocalizedWeatherDisplay degreesK={degreesK} humidity={humidity}/>
  : <WeatherTitle/>;

const WeatherTitle = () => {
  const language = useSelector((state) => state.language);
  return (
    <div data-testid='weather-title' className={language}>
      {staticStrings.weatherLabels[language]}
    </div>
  );
}

const _buildWeatherData = async (degreesSetter, humiditySetter) => {
  const fetchedWeatherData = await fetch(urls.openWeatherUrl).then(res => res.json());
  degreesSetter(fetchedWeatherData.main.temp);
  humiditySetter(fetchedWeatherData.main.humidity);
}
