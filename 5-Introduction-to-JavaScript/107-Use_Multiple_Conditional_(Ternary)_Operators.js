/* We can chain conditional operators together to check for multiple conditions. */


function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);
