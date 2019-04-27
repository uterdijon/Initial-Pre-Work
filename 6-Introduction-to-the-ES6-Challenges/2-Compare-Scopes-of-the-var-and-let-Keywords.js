/* let is a new keyword for declaring a variable. It is similar to var but has some extra functionality. If we use let inside a block, statement, or expression, its scope is limited to that block, statement, or expression (it does not apply to the entire function).
*/

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
