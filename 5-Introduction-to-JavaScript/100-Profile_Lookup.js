/* Here I constructed a function to check whether two arguments are present in an array of objects and return the value if so, otherwise return error messages. */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
// Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (name == contacts[i]["firstName"]) {
      if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
      } else {
        return "No such property";
      }}}
  return "No such contact";
}
// Only change code above this line



// Change these values to test your function
lookUpProfile("Akira", "likes");
