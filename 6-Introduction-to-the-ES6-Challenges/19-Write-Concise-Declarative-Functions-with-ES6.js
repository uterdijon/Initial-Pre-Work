/* We do not have to use the keyword function when we are defining a function within an object. We can use this syntax:

const myObj = {
  myFunc(param) {}
};

*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {this.gear = newGear}
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
