/*
To install any pacages globally we just need to add the "-g" flag right after the standard installation command
For example: to install nodemon globally we need to type: "npm install nodemon -g"
And nodemon will be installed globally into the operating system so our "package.json" file won't be changed
--> If you face errors in Linux or Mac then put "sudo" before the command like: "sudo npm install nodemon -g"
*/

// To run nodemon type: "nodemon app.js" --> here you can write any file name instead of app.js
// To stop nodemon press "Ctrl+C"

/////////////////////// app.js ///////////////////////////

const  validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

console.log(getNotes());  // Your notes...

console.log(validator.isURL('example.com'))
/*
Output
Your notes...
true
*/

console.log(chalk.red.inverse.bold('Error!'));
/*
Output
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Your notes...
true
Error!
[nodemon] clean exit - waiting for changes before restart
*/

