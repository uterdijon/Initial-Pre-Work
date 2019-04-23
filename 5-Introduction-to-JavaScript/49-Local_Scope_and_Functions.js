/* Variables declared within functions have a local scope (as long as they have 'var' before them). */


function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 8;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
