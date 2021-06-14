import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { fetchJsonData } from '../../common/restClient';
import { LocalizedWeatherDisplay } from './LocalizedWeatherDisplay';
import staticStrings from '../../StaticStrings';

export default function WeatherDisplay () {
  const [ degreesK, setDegreesK] = useState(null);
  const [ humidity, setHumidity ] = useState(null);
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
  const fetchedWeatherData = await fetchJsonData(urls.openWeatherUrl);
  degreesSetter(fetchedWeatherData.main.temp);
  humiditySetter(fetchedWeatherData.main.humidity);
}
