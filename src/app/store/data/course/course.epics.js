import { ofType } from 'redux-observable';
import {
  debounceTime,
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';
import { of } from "rxjs";

import {
  GET_COURSE,
  getCourseSuccess,
  getCourseFailed,
} from './course.actions';
import { getCourseById } from 'app/core/services/course.service';

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
