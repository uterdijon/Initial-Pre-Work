/* We can use the rest operator where the parameters of a function normally go to allow a function to take any number of arguments. The arguments will then be stored in an array with the variable args pointing to it. The rest operator looks like this:

function myFunc(...args) {}

*/

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
