/* We can also use destructuring assignment to assign individual values from an array to individual variables:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];

In this case, a=1, b=2, and c=5.

*/


let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
