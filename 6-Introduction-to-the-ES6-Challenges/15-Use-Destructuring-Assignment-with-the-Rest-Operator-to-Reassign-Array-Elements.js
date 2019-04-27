/* We can combine destructuring with the rest operator in order to access a part of an array (excluding some items) and assign them to a separate array.

Syntax:

myArray = [1, 2, 3, 4, 5, 7];
const [, , ...arr] = myArray;

The new array is:   arr = [3, 4, 5, 7].
*/


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [,, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
