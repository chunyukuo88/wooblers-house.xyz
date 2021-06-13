import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { getDegreesF, getDegreesC } from './utils';
import { LocalizedWeatherDisplay } from './LocalizedWeatherDisplay';
import staticStrings from '../../StaticStrings';

// TODO: Redo all of this, starting with tests.

export default function WeatherDisplay () {
  const [ degreesK, setDegreesK] = useState(275);
  const [ humidity, setHumidity ] = useState(50);
  const [ showWeather, setShowWeather ] = useState(false);
  const selectedLang = useSelector((state) => state.language);

  useEffect(() => {
    _buildWeatherData(setDegreesK, setHumidity);
  }, []);

  const toggleDisplay = () => setShowWeather(!showWeather);

  return (
    <div onClick={toggleDisplay} className='weather'>
      <Display {...{ showWeather, selectedLang, degreesK, humidity }} />
    </div>
  );
}

const Display = ({ showWeather, selectedLang, degreesK, humidity }) => showWeather
  ? _buildWeatherDisplay(selectedLang, degreesK, humidity)
  : _getWeatherTitle(selectedLang);

const _buildWeatherDisplay = (degreesK, humidity) => {
  return <LocalizedWeatherDisplay {...{degreesK, humidity}}/>
};

const _buildWeatherData = async (degreesSetter, humiditySetter) => {
  const fetchedWeatherData = await fetch(urls.openWeatherUrl).then(res => res.json());
  degreesSetter(fetchedWeatherData.main.temp);
  humiditySetter(fetchedWeatherData.main.humidity);
}

const _getWeatherTitle = (language) => {
  const { weatherLabels } = staticStrings;
  return (
    <div className={language}>
      {weatherLabels[language]}
    </div>
  );
};
