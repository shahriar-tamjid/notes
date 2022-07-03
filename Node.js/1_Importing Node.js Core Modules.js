// Node Module System is one of the most fundamental features of Node.js
// This is what allows us to load functionality into our app and use it to do interesting things.
// As an example:
// If we want to read or write from the file system,
// If we want to connect to a database or start a web server.

// There are 3 ways to load node modules:
// 1. Load the core node modules that is built in the Node.js
// 2. Load 3rd party node modules from other developers
// 3. Load your own node modules

// Importing Node.js Core Modules

// fs.writeFile() --> This method allows us to write some data to a file on our file system from the Node.js app
// There are two versions of it.
// 1. fs.writeFile() --> Asynchronous
// 2. fs.writeFileSync() --> Synchronous

// fs.writeFile() takes two arguments: one is the name of the file that we want to write to, another one is the data we want to write

// In Node.js to import modules we need to use the "require()" function.
// And that "require()" needs to be stored in a variable

const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// This will create a new file named 'notes.txt' in the current directory and place the text 'This file was created by Node.js!' in it.

// Exercise: Append a message to notes.txt

// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', 'My name is Shahriar Tamjid and I want to be a Software Engineer.');
// The line will get appended without any spaces or new line.
