import * as types from './types';
import { fetchWeather } from '../common/restClient';

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

