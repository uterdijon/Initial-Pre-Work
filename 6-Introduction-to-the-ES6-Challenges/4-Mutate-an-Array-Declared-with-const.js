/* We use const for variables we do not intend to reassign. However, arrays and objects created with const CAN still be modified (they are mutable). */

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  let myNum = s.pop();
  s.unshift(myNum);
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
