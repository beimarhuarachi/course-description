import { combineEpics } from 'redux-observable';
import { getCourseEpic } from './data/course/course.epics';

const rootEpic = combineEpics(
  getCourseEpic,
);

export default rootEpic;
