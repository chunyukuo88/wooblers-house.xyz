import React from 'react';
import { useSelector } from 'react-redux';
import { getDegreesC, getDegreesF } from './utils';
import _ from 'lodash';

export const EnglishWeatherDisplay = (props) => {
  const language = useSelector((state) => state.language);
  const updatedProps = getUpdatedProps(props, language);
  return (
    <LocalizedString {...updatedProps}/>
  );
};

const getUpdatedProps = (props, language) => {
  const updatedProps = _.cloneDeep(props);
  updatedProps.language = language;
  return updatedProps;
};

const getDegrees = (isCelsius, degreesKelvin) => isCelsius
  ? getDegreesC(degreesKelvin)
  : getDegreesF(degreesKelvin);

const LocalizedString = (props) => {
  const { language, degreesKelvin, humidity, isCelsius } = props;
  return (
    <div className={language} data-testid='content-wrapper' >
      <span>{getDegrees(isCelsius, degreesKelvin)}°F </span>and {humidity}% humidity
    </div>
  );
}




// <div className='chinese'>
//     這裏有<span>{Math.round(this.degrees)}°C</span>，濕度為{this.humidity}%
// </div>
// <div className='russian'>
//     Здесь <span>{Math.round(this.degrees)}°C </span>и влажность {this.humidity}%
// </div>