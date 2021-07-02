import * as types from './types';
import { getWeatherDatum } from '../common/restClient';

export async function getGlobalTemp(){
  return {
    type: types.FETCH_TEMP,
    payload: {
      globalTemp: await getWeatherDatum('temp'),
    }
  };
}

export async function getGlobalHumidity(){
  return {
    type: types.FETCH_HUMIDITY,
    payload: {
      globalHumidity: await getWeatherDatum('humidity'),
    }
  };
}

