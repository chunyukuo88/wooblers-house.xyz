import urls from '../urls';
import * as types from './types';

export function switchToRussian(){
  return {
    type: types.RUSSIAN,
    payload: 'russian'
  };
}
export function switchToEnglish(){
  return {
    type: types.ENGLISH,
    payload: 'english'
  };
}
export function switchToChinese(){
  return {
    type: types.CHINESE,
    payload: 'chinese'
  };
}

export async function getGlobalTemp(){
  return {
    type: types.FETCH_TEMP,
    payload: {
      globalTemp: await fetchWeather('temp'),
    }
  };
}

export async function getGlobalHumidity(){
  return {
    type: types.FETCH_HUMIDITY,
    payload: {
      globalHumidity: await fetchWeather('humidity'),
    }
  };
}

async function fetchWeather(weatherAttribute){
  try {
    const data = await fetch(urls.openWeatherUrl)
      .then(res => res.json())
      .catch(e => console.error(e.message));
    const result = (weatherAttribute === 'temp')
        ? data.main.temp
        : data.main.humidity;
    return result;
  } catch (e) {
    console.error('fetchWeather() failed', e.message);
  }
}



