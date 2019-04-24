/* There is a method we can use to check whether an object has a particular property:  object.hasOwnProperty(propname) */


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
   if (myObj.hasOwnProperty(checkProp)) {
     return myObj[checkProp];
   } else {
     return "Not Found"
   }
}

// Test your code by modifying these values
checkObj("gift");
