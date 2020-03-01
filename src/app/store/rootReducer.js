import { combineReducers } from 'redux';
import { appInfoReducer } from './app-info/reducer';

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
});

export default rootReducer;
