export const GET_COURSE = 'GET_COURSE';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILED = 'GET_COURSE_FAILED';

export const UPDATE_COURSE = 'UPDATE_COURSE';
export const UPDATE_TEXTBOOK = 'UPDATE_TEXTBOOK';
export const DISCARD_ALL_CHANGES = 'DISCARD_ALL_CHANGES';
export const DISCARD_TEXTBOOK_CHANGES = 'DISCARD_TEXTBOOK_CHANGES';

export const SAVE_ALL_CHANGES = 'SAVE_ALL_CHANGES';
export const SAVE_ALL_CHANGES_SUCCESS = 'SAVE_ALL_CHANGES_SUCCESS';
export const SAVE_ALL_CHANGES_FAILED = 'SAVE_ALL_CHANGES_FAILED';

export const SAVE_TEXTBOOK = 'SAVE_TEXTBOOK';
export const SAVE_TEXTBOOK_SUCCESS = 'SAVE_TEXTBOOK_SUCCESS';
export const SAVE_TEXTBOOK_FAILED = 'SAVE_TEXTBOOK_FAILED';

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

export function discardAllChanges() {
  return {
    type: DISCARD_ALL_CHANGES,
    payload: {},
  };
}

export function discardTextbookChanges(textbookId = '') {
  return {
    type: DISCARD_TEXTBOOK_CHANGES,
    payload: {
      textbookId,
    },
  };
}

export function saveAllChanges() {
  return {
    type: SAVE_ALL_CHANGES,
    payload: {},
  };
}

export function saveAllChangesSuccess() {
  return {
    type: SAVE_ALL_CHANGES_SUCCESS,
    payload: {},
  };
}

export function saveAllChangesFailed(error) {
  return {
    type: SAVE_ALL_CHANGES_FAILED,
    payload: {
      error,
    },
  };
}

export function saveTextbook(textbookId = '') {
  return {
    type: SAVE_TEXTBOOK,
    payload: {
      textbookId,
    },
  };
}

export function saveTextbookSuccess(textbookId = '', response) {
  return {
    type: SAVE_TEXTBOOK_SUCCESS,
    payload: {
      textbookId,
      response,
    },
  };
}

export function saveTextbookFailed(error) {
  return {
    type: SAVE_TEXTBOOK_FAILED,
    payload: {
      error,
    },
  };
}
