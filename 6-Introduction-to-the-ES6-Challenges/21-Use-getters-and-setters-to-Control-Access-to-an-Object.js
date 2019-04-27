/* Getters and setters are functions that allow us to return the value of variable within an object, or to modify the value of a variable within an object.

*/


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temp) {
      this.temp = temp;

    }
    get tempC(){
        return 5/9 * (this.temp - 32)
      }
    set tempC(newTemp) {
      this.temp = newTemp * 9.0 / 5 +32
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
