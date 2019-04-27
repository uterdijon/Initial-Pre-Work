/* This is a concise way to create an object that takes the function's parameters as its attributes. Syntax:

const myObject = (atr1, atr2) => ({atr1, atr2})

*/

Hint 1:


const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
   name, age, gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
