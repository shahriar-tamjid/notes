/*
Sometimes our node_modules folder can get really big. So to make our project clean and share on GitHub we can ignore or delete the node_modules folder.
But our program won't run without the node_modules folder
To run the program after getting the code we need to run "npm install" in the terminal
This will create a node_modules folder according to the "package.json" and "package-lock.json" file
*/

/*
Challange: Use the Chalk library into the project
1. Install version 2.4.1 of Chalk
2. Load chalk into app.js
3. Use it to print string "Success!" to the console in green
4. Use Docs to explore more
*/

/////////////////// app.js /////////////////////////

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

console.log(chalk.green('Success!'));
/*
Output
Your notes...
true
Success! --> [Green text]
*/

console.log(chalk.bgGreen('Success!'));
/*
Output
Your notes...
true
Success!
Success! --> [Green Background]
*/

console.log(chalk.green.inverse.bold('Success!'));
/*
Output
Your notes...
true
Success!
Success!
Success! --> [Green Background + Bold text]
*/

