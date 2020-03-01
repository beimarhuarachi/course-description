import {
  GET_COURSE,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILED,
  UPDATE_COURSE,
  UPDATE_TEXTBOOK,
  DISCARD_ALL_CHANGES,
} from './course.actions';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  updating: false,
  updatingError: null,
  course: null,
  textbooks: [],
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
      const { course } = action.payload;
      const { id, name, description, textbooks } = course;
      const mappedTextbooks = textbooks.map(({ id, author, title }) => {
        return {
          id,
          updating: false,
          updatingError: null,
          previousValue: {
            author,
            title,
          },
          currentValue: {
            author,
            title,
          },
        };
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        updating: false,
        updatingError: null,
        course: {
          id,
          previousValue: {
            name,
            description,
          },
          currentValue: {
            name,
            description,
          },
        },
        textbooks: mappedTextbooks,
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

    case UPDATE_COURSE: {
      const { key, value } = action.payload;
      return {
        ...state,
        course: {
          ...state.course,
          currentValue: {
            ...state.course.currentValue,
            [key]: value,
          },
        }
      };
    }

    case UPDATE_TEXTBOOK: {
      const { id: courseId, key, value } = action.payload;
      const newTextbooks = state.textbooks.map((item) => {
        if (item.id !== courseId) {
          return item;
        }
        return {
          ...item,
          currentValue: {
            ...item.currentValue,
            [key]: value,
          },
        };
      });
      return {
        ...state,
        textbooks: newTextbooks,
      };
    }

    case DISCARD_ALL_CHANGES: {
      const newTextbooks = state.textbooks.map((textbook) => {
        return {
          ...textbook,
          currentValue: {
            ...textbook.previousValue,
          },
        };
      });
      return {
        ...state,
        course: {
          ...state.course,
          currentValue: {
            ...state.course.previousValue,
          },
        },
        textbooks: newTextbooks,
      };
    }

    default: {
      return state;
    }
  }
}
