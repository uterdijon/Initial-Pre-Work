/* We should use const (with variable written in all caps and underscores) for variables that we do not want to reassign, and we should use let for ones we do want to reassign later. */

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
