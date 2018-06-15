//arrow function examples

var square1 = (x) => {
  var result = x * x;
  return result;
};
console.log(square1(9));



var square2 = (x) => x * x;
console.log(square2(9));

//arrow function that wont work this case needs to be in a regular function
var user = {
  name: 'Justin',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); //will return undefined this keyword wont be bound
  },



  // regular function

  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); //returns properly
  }
};
//user.sayHi(1, 2, 3); //for the arrow func that wont work needs to be regualr function, see next line
user.sayHiAlt(1, 2, 3); // regualr function returns properly
