/* A queue is a data structure where new items are added at the back and old items are taken off the front. Here I made a function (nextInLine) to add and remove items from a queue (are). */

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];


// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));