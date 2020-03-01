import { combineEpics } from 'redux-observable';
import {
  getCourseEpic,
  updateCourseEpic,
  saveTextbookEpic,
} from './data/course/course.epics';

const rootEpic = combineEpics(
  getCourseEpic,
  updateCourseEpic,
  saveTextbookEpic,
);

export default rootEpic;
