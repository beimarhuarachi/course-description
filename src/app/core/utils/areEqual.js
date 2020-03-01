/**
 * Shallow compares two objects
 * @param {Object} a object
 * @param {Object} b object
 */
export function areEqual(a, b) {
  for(var key in a) {
      if(a[key] !== b[key]) {
          return false;
      }
  }
  return true;
}
