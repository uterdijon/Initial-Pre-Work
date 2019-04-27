/* We can specify the default value for a parameter to be used if no argument is given when the function is invoked. Here is the syntax:

function myFunc(parameter, parameter=value) {}

*/

const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
