// There are some common tasks that don't require to build packages from scratch
// We can have them from npm
// To have npm in our project we need to write: "npm init" in the terminal
// It will ask for custom values for different fields, but for the time being we can stick with the default values
// It will create a "package.json" file where it can hold all the dependencies

///////////////////  package.json ///////////////////

{
  "name": "notes-app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

// We want to install the "validator" package from the npm website
// npm i validator@10.8.0
// Our package.json will be updated

///////////////////  app.js ///////////////////

const  validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());  // Your notes...

console.log(validator.isEmail('tamjid@example.com'));
/*
Output:
Your notes...
true
*/

console.log(validator.isEmail('example.com'));
/*
Output:
Your notes...
false
*/

console.log(validator.isURL('example.com'))
/*
Output
Your notes...
true
*/

console.log(validator.isURL('https/example.com'))
/*
Output
Your notes...
false
*/
