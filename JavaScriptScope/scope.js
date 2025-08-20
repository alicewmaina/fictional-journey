// scope
function myFunction() {
  
  var pizzaName = "Margarita";
  console.log(pizzaName); // This works, prints "Margarita"
}

myFunction();

console.log(pizzaName); // Error! pizzaName is not defined here


// blocked scoped variable
const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage = 'Logged in.';
}

// Uncaught ReferenceError...
console.log(statusMessage);


// global variables
// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // => blue


// let vs var
for (let i = 0; i < 3; i++) {
  // This is the Max Scope for 'let'
  // i accessible ✔️
}
// i not accessible ❌

for (var i = 0; i < 3; i++) {
  // i accessible ✔️
}
// i accessible ✔️
// var is scoped to the nearest function block, and let is scoped to the nearest enclosing block.



// loops for closure
// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
}


// Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) { 
  setTimeout(_ => console.log(j), 10);
}


// The variable has its own copy using let, and the variable has shared copy using var.