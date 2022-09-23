// Setting up VS Code
// 1. Enable "Prettier"
/*
Step-1: Install "Prettier" from VS Code Extensions
Step-2: Define "Prettier" as the default formatter: Settings->Search for: "default formatter"->Select: "Prettier Code Formatter - esbenp.prettier-vscode"->also check "Format on Save"
*/
// let's have a look at "Prettier"

// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 21;
if (x === 23) console.log(23);
// we can notice the subtle changes which makes the code pretty and easy to read.

// 2. Automate the "console.log();"
/*
Step-1: Settings->User Snippets->New Global Snippet File->Give it a name: "Tamjid"->Uncomment the Print or Console->Rename "Prefix" part to "cl"->Save it. And you're done.
*/

// Installing Node.js and Setting up a Dev Environment
// 3. Set-up a live environment
/*
There are 2 ways to setup a live environment for JavaScript Development
1. Install the Live-Server Extension
2. [Professional Way] Install Node.js -> npm install live-server -g -> live-server
*/

// Pro Tip: Never Give Up + Always challange yourself with projects, projects and projects.

// How to think like a developer?
/*
1. Make sure you 100% understand the problem. "Ask the right question" to get a clear picture of the problem
2. Divide and Conquer Strategy: Break a big problem into smaller sub-problems.
3. Do as much research as you need to solve a problem.
4. For bigger problems write pseudo-code before writing the actual code.
*/

// Using Google, StackOverflow and MDN Web Docs
// Sample Problem 1:
/*
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, 
calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Steps to solve:
// 1. Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp
// - How to calculate the max and min temp?
// - What does a sensor error look like? And what to do?

// 2. Breakng up into sub-problems
// - How to ignore error?
// - Find the min and max of temp array
// - Subtract min from max and return it

// Solution:
// 1. Create function for every problem
// 2. Google: "javascript find max element in array"

function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue; // To ignore the errors.

    max = temps[i] > max ? temps[i] : max;
    min = temps[i] < min ? temps[i] : min;
  }
  return max - min;
}
const amplitude = calcTempAmplitude(temperature);
console.log("Amplitude: " + amplitude);

// Sample Problem 2:
// function should contain two arrays and everything should work as before

// Understanding the problem :
// Now it just requires 2 arrays

// Breaking it into sub-problems:
// Merge 2 arrays

function calcTempAmplitudeNew(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue; // To ignore the errors.

    max = temps[i] > max ? temps[i] : max;
    min = temps[i] < min ? temps[i] : min;
  }
  return max - min;
}
const amplitudeNew = calcTempAmplitudeNew(
  [12, 31, 2, -3, 5],
  [10, 20, 30, 35, -6, -9]
);
console.log("Amplitude: " + amplitudeNew);

// Debugging: Finding, Fixing and Preventing Bugs
// Steps of Debugging: Identify -> Find -> Fix -> Prevent

// Debugging Exercise:
// Add the functionality of Kelvin Scale
function measureKelvin() {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // FIX BUG
    // value: Number(prompt("Degree in Celcius: ")),
    value: 10,
  };

  console.log(measurement.value);
  //   console.warn(measurement.value); // it shows us like it's a warning
  //   console.error(measurement.value); // it shows us like it's an error
  console.log(measurement);
  // FIND BUG
  console.table(measurement);

// debugger;  // this will take us in the debugging mode

  const kelvin = measurement.value + 273;
  return kelvin;
}
// IDENTIFY BUG
console.log(measureKelvin());

// Using Chrome Debugger Tool
// Inspect mode -> Sources -> .js file -> we can see the code and set breakpoints to debug
// We can easily initiate the debugger in our code we just need to write "debugger;" and it will automatically set a breakpoint and open the debugger tool.


// Coding Challange
// [17,21,23] will print "...17 *C in 1 days...21 *C in 2 days...23 *C in 3 days..."
const arr1 = [17,21,23];

function printForecast(array){
  let str = "";
  for(let i = 0; i < array.length; i++){
    str += `...${array[i]} *C in ${i+1} days`;
  }
  return str+"...";
}

console.log(printForecast(arr1));
const arr2 = [12,5,-5,0,4];
console.log(printForecast(arr2));