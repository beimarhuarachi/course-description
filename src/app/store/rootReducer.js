import { combineReducers } from 'redux';
import { appInfoReducer } from './app-info/app-info.reducer';
import { dataReducer } from './data/data.reducer';

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
  data: dataReducer,
});

export default rootReducer;
