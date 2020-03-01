import { of, throwError } from 'rxjs';

const mockCourse = {
  "id": "123",
  "name": "Introduction to Advertising",
  "description": "Learn about advertising",
  "textbooks": [
    {
      "id": "1",
      "author": "Joe Smith",
      "title": "Mobile Advertising Fundamentals"
    },
    {
      "id": "2",
      "author": "Eli Hinnegan",
      "title": "Introduction to Location-Based Advertising"
    },
    {
      "id": "3",
      "author": "Edward Bernays",
      "title": "Public Relations"
    },
  ]
};

export function getCourseById(courseId = '') {
  return of({
    ...mockCourse,
    id: courseId,
  });
}

/**
 * Make a PUT reques to the server.
 * @param {String} courseId 
 * @param {Object} course 
 */
export function updateCourse(courseId = '', course) {
  if (!course) {
    return throwError('No body specified');
  }
  return of({ updated: true, id: courseId });
}
