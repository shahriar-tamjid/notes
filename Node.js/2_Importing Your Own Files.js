////////////// utils.js //////////////
console.log('Shahriar');

////////////// app.js //////////////
require('./utils'); // We are importing our created file

console.log('Tamjid');

// Output:
// Shahriar // Code from the created file executes first as it is called before our console.log()
// Tamjid // And then we get to our console.log() 


//////// Exporting a variable /////////
////////////// utils.js //////////////
console.log('Inside utils.js file');

const name  = "Shahriar Tamjid";
// We cannot access this variable elsewhere in the directory.
// To make it accessible we need to use "module.exports"

module.exports = name;
// Whatever we export that is available as the return value of the file.
// That means when we will require() this utils.js file we will get the 'name' variable's value as the output alongside any console message that we may pass

////////////// app.js //////////////
const imported_name = require('./utils') 

console.log(imported_name);

// Output:
// Inside utils.js file
// Shahriar Tamjid


//////// Exporting a function /////////
////////////// utils.js //////////////
console.log('Inside utils.js file');

const name  = "Shahriar Tamjid";

// Function to add two numbers
const add = function(a, b) {
    return a + b;
}

module.exports = add;
// Whatever we export that is available as the return value of the file.
// That means when we will require() this utils.js file we will get the 'add' function's value as the output alongside any console message that we may pass

////////////// app.js //////////////
const add = require('./utils');

const sum = add(6, -2);

console.log(sum);

// Output:
// Inside utils.js file
// 4


// Exercise: Define a use a function in a new file 
// 
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function 
// 4. From app.js, load in and call the function printing message to console

////////////// notes.js //////////////
const getNotes = function() {
    return "Your notes..."
}

module.exports = getNotes;

////////////// app.js //////////////
const getNotes = require('./notes');

console.log(getNotes());  // Your notes...
