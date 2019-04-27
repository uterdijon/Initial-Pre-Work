/* In ES6 there is a new way to create objects, using the keyword class. Here is the syntax:

class myClass {
  constructor(myAtr){
    this.myAtr = myAtr;
}
}

const myInst = new myClass('newAtr');

*/


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
