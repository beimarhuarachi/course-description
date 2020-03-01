import {
  GET_COURSE,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILED,
} from './course.actions';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  course: null,
};

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE: {
      return {
        ...state,
        loading: true,
        course: null,
        error: null,
      };
    }

    case GET_COURSE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        course: action.payload.course,
      };
    }

    case GET_COURSE_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error,
      };
    }
  
    default: {
      return state;
    }
  }
}
