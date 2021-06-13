import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { getDegreesC, getDegreesF } from './utils';
import staticStrings from '../../StaticStrings';

export const LocalizedWeatherDisplay = (props) => {
  const language = useSelector((state) => state.language);
  const updatedProps = getUpdatedProps(props, language);
  return <LocalizedString {...updatedProps}/>;
};

const getUpdatedProps = (props, language) => {
  const updatedProps = _.cloneDeep(props);
  updatedProps.language = language;
  return updatedProps;
};

const getDegrees = (language, degreesKelvin) => language === 'english'
  ? getDegreesF(degreesKelvin).toString().concat('°F ')
  : getDegreesC(degreesKelvin).toString().concat('°C ');

const LocalizedString = (props) => {
  const { language, degreesKelvin, humidity } = props;
  const degrees = getDegrees(language, degreesKelvin);
  const tempString = staticStrings.weatherTemp[language];
  const humidityString = staticStrings.weatherHumidity[language];
  return (
    <div className={language} data-testid='content-wrapper'>
      <span>{tempString}</span><span>{degrees}</span>
      <span>{humidityString}</span><span>{humidity}%</span>
    </div>
  );
}