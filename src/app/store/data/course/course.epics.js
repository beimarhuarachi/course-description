import { ofType } from 'redux-observable';
import {
  debounceTime,
  switchMap,
  map,
  catchError,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from "rxjs";

import {
  GET_COURSE,
  getCourseSuccess,
  getCourseFailed,
  SAVE_ALL_CHANGES,
  saveAllChangesSuccess,
  saveAllChangesFailed,
} from './course.actions';
import { getCourseById, updateCourse } from 'app/core/services/course.service';

export const getCourseEpic = action$ =>
  action$.pipe(
    ofType(GET_COURSE),
    debounceTime(100),
    switchMap(
      ({ payload }) => {
        const { courseId } = payload;
        return getCourseById(courseId)
          .pipe(
            map(response => getCourseSuccess(response)),
            catchError(error => of(getCourseFailed(error))),
          );
      },
    ),
  );

export const updateCourseEpic = (action$, state$) =>
  action$.pipe(
    ofType(SAVE_ALL_CHANGES),
    debounceTime(150),
    withLatestFrom(state$),
    switchMap(
      ([, { data }]) => {
        const { course } = data.courseDetails;
        const bodyRequest = generateBodyRequest(data.courseDetails);
        return updateCourse(course.id, bodyRequest)
          .pipe(
            map(response => saveAllChangesSuccess(response)),
            catchError(error => of(saveAllChangesFailed(error))),
          );
      },
    ),
  );

function generateBodyRequest({ course, textbooks }) {
  const { name, description } = course.currentValue;
  const textbooksToSend = textbooks.map(({ id, currentValue }) => {
    return {
      id,
      ...currentValue,
    };
  });
  return {
    id: course.id,
    name,
    description,
    textbooks: textbooksToSend,
  };
}
