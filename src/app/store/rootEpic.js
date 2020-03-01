import { combineEpics } from 'redux-observable';
import { getCourseEpic, updateCourseEpic } from './data/course/course.epics';

const rootEpic = combineEpics(
  getCourseEpic,
  updateCourseEpic,
);

export default rootEpic;
