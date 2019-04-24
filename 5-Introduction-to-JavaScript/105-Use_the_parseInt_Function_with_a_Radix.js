/* parseInt() takes a second argument for the radix, or the base of the number. So the argument would be 2 for the binary system. */

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
