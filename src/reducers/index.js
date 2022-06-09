import { combineReducers } from 'redux';
import globalTempReducer from './globalTempReducer';
import globalHumidityReducer from './globalHumidityReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  globalTemp: globalTempReducer,
  globalHumidity: globalHumidityReducer,
  globalNavLocation: navigationReducer,
});
