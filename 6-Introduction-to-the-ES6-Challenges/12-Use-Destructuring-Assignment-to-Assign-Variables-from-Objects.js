/* Destructuring assignment is way to concisely assign an value taken from an object to a variable. The syntax is:

var myObject = {x: 3.6, y: 7.4, z: 6.54};
const {x:a, y:b, z:c} = myObject;

where a,b,c are the new variables you want to store the values in.

*/

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
