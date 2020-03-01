import { of, throwError } from 'rxjs';
// ajax operator has support for asynchronous request to server
// ajax({
//   url: 'https://httpbin.org/delay/2',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'rxjs-custom-header': 'Rxjs'
//   },
//   body: {
//     rxjs: 'Hello World!'
//   }
// })

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
    {
      "id": "4",
      "author": "Eli Hinnegan",
      "title": "Introduction to Location-Based Advertising"
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
  console.log('sending: ', courseId, course);
  if (!course) {
    return throwError('No body specified');
  }
  return of({ updated: true, id: courseId });
}
