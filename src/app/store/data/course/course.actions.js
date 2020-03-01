export const GET_COURSE = 'GET_COURSE';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILED = 'GET_COURSE_FAILED';

export const UPDATE_COURSE = 'UPDATE_COURSE';
export const UPDATE_TEXTBOOK = 'UPDATE_TEXTBOOK';

export function getCourse(courseId = '') {
  return {
    type: GET_COURSE,
    payload: {
      courseId,
    },
  };
}

export function getCourseSuccess(course = {}) {
  return {
    type: GET_COURSE_SUCCESS,
    payload: {
      course,
    },
  };
}

export function getCourseFailed(error) {
  return {
    type: GET_COURSE_FAILED,
    payload: {
      error,
    },
  };
}

export function updateCourse(key = '', value = '') {
  return {
    type: UPDATE_COURSE,
    payload: {
      key,
      value,
    },
  };
}

export function updateTextbook(id = '', key = '', value = '') {
  return {
    type: UPDATE_TEXTBOOK,
    payload: {
      id,
      key,
      value,
    },
  };
}
