import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { getDegreesF, getDegreesC } from './utils';
import { LocalizedWeatherDisplay } from './LocalizedWeatherDisplay';

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
  : _getWeatherTitle(WeatherStartingLabels, selectedLang);

const _buildWeatherDisplay = (language, degreesK, humidity) => {
  const celsiusProps = _buildCelsiusProps(degreesK, humidity);
  const fahrenheitProps = _buildFahhrenheitProps(degreesK, humidity);
  switch(language){
    case 'russian': return <RussianWeatherDisplay {...celsiusProps}/>
    case 'chinese': return <ChineseWeatherDisplay {...celsiusProps}/>
    default: return <LocalizedWeatherDisplay {...fahrenheitProps}/>
  }
};

const _buildCelsiusProps = (degreesK, humidity) => {
  return {
    temp: getDegreesC(degreesK),
    humidity: humidity,
  };
};

const _buildFahhrenheitProps = (degreesK, humidity) => {
  return {
    temp: getDegreesF(degreesK),
    humidity: humidity,
  };
};

const _buildWeatherData = async (degreesSetter, humiditySetter) => {
  const fetchedWeatherData = await fetch(urls.openWeatherUrl).then(res => res.json());
  degreesSetter(fetchedWeatherData.main.temp);
  humiditySetter(fetchedWeatherData.main.humidity);
}

const _getWeatherTitle = (WeatherStartingLabels, language) => {
  return (
    <div className={language}>
      {WeatherStartingLabels[language]}
    </div>
  );
};
