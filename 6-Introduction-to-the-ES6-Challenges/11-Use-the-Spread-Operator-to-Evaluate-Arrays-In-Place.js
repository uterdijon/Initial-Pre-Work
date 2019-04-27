/* The spread operator looks like the rest operator but it is used in different situations. We can use it to spread out an array to fill up the arguments of a function when the function calls for multiple arguments. It can also be used to copy items from one array to another, as in the example below. The syntax for the spread operator is:

(...arr)

*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
