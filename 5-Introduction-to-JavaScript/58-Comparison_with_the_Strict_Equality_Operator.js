/* The equality operator == will compare strings and numbers and convert them to each other in order to compare them. However the strict equality operator === will only return true if the values are of the same data type and equivalent. */


// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
