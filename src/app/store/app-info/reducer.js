import { UPDATE_APP_INFO } from './actions';

const initialState = { appName: 'Course Description' };

export function appInfoReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_APP_INFO: {
      return {
        ...action.payload.appInfo,
      };
    }
  
    default: {
      return state;
    }
  }
}
