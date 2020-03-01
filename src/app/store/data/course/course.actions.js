export const GET_COURSE = 'GET_COURSE';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILED = 'GET_COURSE_FAILED';

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
