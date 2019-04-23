/* We can have a global variable and local variable with the same name. In this case, the local variable takes precedence. */


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
