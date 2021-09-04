import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { useSelector } from 'react-redux';
import { getDegreesC, getDegreesF } from './utils';
import staticStrings from '../../StaticStrings';

export const LocalizedWeatherDisplay = (props) => {
  const language = useSelector((state) => state.language);
  const updatedProps = addLanguageToProps(props, language);
  return <LocalizedString {...updatedProps}/>;
};

const addLanguageToProps = (props, language) => {
  const updatedProps = cloneDeep(props);
  updatedProps.language = language;
  return updatedProps;
};

const getDegrees = (language, degreesK) => language === 'english'
  ? getDegreesF(degreesK).toString().concat('°F ')
  : getDegreesC(degreesK).toString().concat('°C ');

const LocalizedString = (props) => {
  const { language, degreesK, humidity } = props;
  const degrees = getDegrees(language, degreesK);
  const tempString = staticStrings.weatherTemp[language];
  const humidityString = staticStrings.weatherHumidity[language];
  return (
    <div className={language} data-testid='content-wrapper'>
      <span>{tempString}</span><span>{degrees}</span>
      <span>{humidityString}</span><span>{humidity}%</span>
    </div>
  );
}
