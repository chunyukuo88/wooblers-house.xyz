import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import globalTempReducer from './globalTempReducer';
import globalHumidityReducer from './globalHumidityReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  language: languageReducer,
  globalTemp: globalTempReducer,
  globalHumidity: globalHumidityReducer,
  globalNavLocation: navigationReducer,
});
