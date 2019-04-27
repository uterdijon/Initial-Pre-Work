/* Using let instead of var prevents the variable from being overwritten. */

let catName = "Oliver";
let quote;
function catTalk() {
  "use strict";

  quote = catName + " says Meow!";

}
catTalk();
