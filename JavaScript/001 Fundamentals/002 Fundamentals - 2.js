'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true; // if we use hasDriverLicense then normal JS will consider that as a new variable thus it will give us a bug in the program but the strict mode will save us from this error.
if (hasDriversLicense) console.log("I can drive :D");

// strict mode also preserves the words that might become keywords in the future and shows us error if we use them

// let interface = "audio";
// let private = "life";

// Functions
function logger(){
    console.log("My name is Tamjid.");
}
// calling, running, invoking function
logger();
logger();
logger();

function fruitJuicer(numOfApples, numOfOranges){
    const juice = `Juice made of ${numOfApples} apples and ${numOfOranges} oranges!`;
    return juice;
}

const appleJuice = fruitJuicer(5, 0);
console.log(appleJuice);
console.log(fruitJuicer(3, 2));

const add = Number("100")+67;
console.log(add);

// function declaration
function calcAge1(birthYear){
    return 2021 - birthYear;
}

console.log(calcAge1(1999));

// function expression
const calcAge2 = function(birthYear){
    return 2021-birthYear;
}

console.log(calcAge2(1998));

// Arrow function (special feature of ES6)
// Arrow functions helps us to write functions in efficient way ... in a single line ... no need for parenthesis

const calcAge3 = birthYear => 2021 - birthYear;
console.log(calcAge3(1990));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1999, "Tamjid"));
console.log(yearsUntilRetirement(1980, "Angela"));

// Using function into another function

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitJuicer(numOfApples, numOfOranges){
    const applePieces = cutFruitPieces(numOfApples);
    const orangePieces = cutFruitPieces(numOfOranges);
    const juice = `Juice made of ${applePieces} apple slices and ${orangePieces} orange slices!`;
    return juice;
}

console.log(fruitJuicer(3, 2));

function yearsUntilRetirement (birthYear, firstName) {
    const age = 2021 - birthYear;
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else{
        console.log(`${firstName} already retired.`);
        return -1;
    }

    // return ;
}
console.log(yearsUntilRetirement(1999, "Tamjid"));
console.log(yearsUntilRetirement(1950, "Angela"));

// coding challange #1
function calcAvg(num1, num2, num3){
    return (num1+num2+num3)/3;
}

function checkWinner(team1, scoreOfTeam1, team2, scoreOfTeam2){
    if(scoreOfTeam1 >= 2*scoreOfTeam2){
        console.log(`${team1} wins (${scoreOfTeam1} vs ${scoreOfTeam2})`);
    } else if(scoreOfTeam2 >= 2*scoreOfTeam1){
        console.log(`${team2} wins (${scoreOfTeam2} vs ${scoreOfTeam1})`);
    } else{
        console.log("No winners. Match drawn!");
    }
}

const dolphineScore = calcAvg(85, 54, 41);
const koalaScore = calcAvg(23, 34, 27);

checkWinner("Team Dolphins", dolphineScore, "Team Koalas", koalaScore);

// Arrays
const friends = ["Eram", "Dhiraj", "Shilon", "Alif"];
console.log(friends);
const years = new Array(1999, 2007, 2011, 2014, 2017, 2019, 2023);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = "Rafi";
console.log(friends);
// But isn't it a contradiction that we've written friends with const but we are still able to edit its element???
// It's because const only makes the primitive data types immutable ... Array is not a primitive data type. So, we can mutate it. Again, what we cannot do is to replace the entire array. like...
// friends = ["Araf", "Pritom"]; // This will be illegal.

// we can put mixed data types in a single array. We perform calculations inside an array. We can even insert an array inside another array.
const firstName = "Tamjid";
const myDetails = ["Shahriar", firstName, 2021-1999, "Software Developer", `My friends are: ${friends}`, friends];
console.log(myDetails);

function calcAge(birthYear){
    return 2021 - birthYear;
}
const years2 = [1990, 1999, 2003, 2007, 2019];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length-2]);
console.log(age1, age2, age3);

// since we've started with an array so its a good idea to start with a new array.
const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length-2])];
console.log(ages)

// Basic Array Methods
const friends = ["Monica", "Rachel", "Phoebe", "Ross", "Joey"];
const newLength = friends.push("Chandler");
// if we just wanna add an element at the end of an array: friends.push("Chandler");
// if we wanna know the lenght of the array after the addition: const newLength = friends.push("Chandler");
// as push is a method so it should return something ... it returns the length of the array.
console.log(friends);
console.log(newLength);

friends.unshift("Fun Bobby"); // if we wanna add anything at the beginning
console.log(friends);

friends.pop(); // removes the last element of the array & returns that element.
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);
const poppedElement = friends.pop();
console.log(friends);
console.log(poppedElement);

friends.shift(); // it removes the first element & returns it.
console.log(friends);

console.log(friends.indexOf("Rachel"));  // shows the index number of an element
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Monica"));  // it checks wheather an array contains certain element
console.log(friends.includes("Joey"));
// includes() maintains strict equality: 23 != "23"
friends.push(23);
console.log(friends.includes(23));  // true
console.log(friends.includes("23"));  // false
// we can use this as conditional also
if(friends.includes("Monica")){
    console.log("You have a friend called Monica.");
}

// coding challange 2
function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill*(15/100) : bill*(20/100);
}
const sampleBill = 100;
console.log("Sample Tip: "+calcTip(sampleBill)+"$");

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips Array: "+tips);

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log("Total Bills Array: "+total);

// Objects
const tamjid = {
    firstName: "Tamjid",
    lastName: "Shahriar",
    age: 2021-1999,
    job: "Software Developer",
    friends: ["Eram","Dhiraj","Shilon","Alif"]
};
console.log(tamjid);

// Retrieving Porperties from an object
console.log(tamjid.lastName);  // using dot notation
console.log(tamjid["lastName"]);  // using bracket notation
// benefit of bracket notation
const nameKey = "Name";
console.log(tamjid["first"+nameKey]);
console.log(tamjid["last"+nameKey]);
// when we first need to compute the property name and then use it, then we have to use bracket notation otherwise dot notation.
// another use case of bracket notation
const interestedIn = prompt("What do you want to know about Tamjid? Choose between firstName, lastName, age, job and friends.");
console.log(tamjid.interestedIn);
// "undefined" is what we get, when we try to access a property on an object that does not exist.
// here "tamjid" does not have a property called "interestedIn", therfore by accessing such property we get "undefined"
console.log(tamjid[interestedIn]);
// now this gives us desired output because in bracket notation the expression is computed first and then it executes.

// as the "undefined" is a falsy value so we can use it for our benefit now
if(tamjid[interestedIn]){
    console.log(tamjid[interestedIn]);
} else{
    console.log("Wrong Request! Choose between firstName, lastName, age, job and friends.");
}

// Add new properties to an object
tamjid.location = "Dhaka, Bangladesh";  // creating a property by using dot operator
tamjid["instagram"] = "@shahriartamjid";  // creating a property by using bracket operator
console.log(tamjid);

// Execise 1
// Output: "Tamjid has 4 friends and among them Dhiraj is the most innocent one."
console.log(`${tamjid.firstName} has ${tamjid.friends.length} friends and and among them ${tamjid.friends[1]} is the most innocent one.`);

// Object Methods
const tamjid = {
    firstName: "Tamjid",
    lastName: "Shahriar",
    birthYear: 1999,
    job: "Software Developer",
    friends: ["Eram","Dhiraj","Shilon","Alif"],
    hasDriversLicense: false,

    calcAge: function(birthYear){  // in order to write function inside an object we need to follow the function expression method
        return 2021-birthYear;
    }

    /*
    here we are not keeping the code dry. because "birthYear" is already been written in a previous property. again if we pass the
    wrong argument then our code will even run prefectly which is not good.
    so our birthYear should only be written in one place.
    so what if we could actually access this "birthYear" property directly from the "tamjid" object instead of having to pass it in?
    we can do that because in every method JavaScript gives us access to a special variable called "this".
    now we can read the "birthYear" directly from this object by using "this.birthYear"
    ==> here "this" is basically the reference of the whole "tamjid" object. we can see that by putting "console.log(this)" inside "calcAge" function.
    ==> in summary "this" is a self-referential keyword of an object. yes, an object can call itself by using "this".
    */

    calcAge: function(){
        console.log(this);
        return 2021-this.birthYear;
    }
    calcAge: function(){  // this is the better way
        this.age = 2021-this.birthYear;
        return this.age;
    },

    getSummary: function(){
        this.summary = `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and has ${this.hasDriversLicense? "a" : "no"} driver's license.`;
        return this.summary;
    }
};

// console.log(tamjid.calcAge(1990));
// console.log(tamjid["calcAge"](1990));
console.log(tamjid.calcAge());
console.log(tamjid.age);

// Exercise 2
// create a property named "getSummary" and the access it.
// Output: "Tamjid is a 22-year old Software Developer and has a/no drivers license."

console.log(tamjid.getSummary());

// as we can use methods in arrays that means arrays are also a special kind of objects which we can manipulate via methods.

// Coding Challange #3
// Calculate the BMI for two person with necessary details stored in objects and output who has the higher BMI.
const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,

    calcBMI: function(){
        return this.weight / this.height ** 2;
    }
};

const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,

    calcBMI: function(){
        return this.weight / this.height ** 2;
    }
};

// if we type john.bmi then it won't work because the function need to execute first to do so. So we should directly call the function
// or we can call the function and then access it's variable before using it in a code block.

if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})'`);
} else if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})'`);
} else{
    console.log(`Both ${john.fullName} and ${mark.fullName} has the same BMI.`);
}

// Loops
for(let rep=1; rep<=10; rep++){
    console.log(`Lifting weights repetition # ${rep}`);
}

const tamjidArray = [
    "Shahriar",
    "Tamjid",
    2021-1999,
    "Software Developer",
    ["Breaking Bad", "Mr. Robot", "Riverdale"],
    true
]
const types = [];
const types2 = [];
for(let i=0; i<tamjidArray.length; i++){
    // Reading from array
    console.log(tamjidArray[i], typeof tamjidArray[i]);
    
    // Filling the array
    types[i] = typeof tamjidArray[i];
    types2.push(typeof tamjidArray[i]);
}
console.log(`types array = ${types}`);
console.log(`types2 array = ${types2}`);

const birthYear = [1991, 1999, 2003, 2007, 2011];
const ages = [];
for(let i = 0; i<birthYear.length; i++){
    ages.push(2021-birthYear[i]);
}
console.log(ages);

// break and continue
// if we only want to log strings to the console
for(let i = 0; i < tamjidArray.length; i++){
    if(typeof tamjidArray[i] != "string") continue;

    console.log(tamjidArray[i], typeof tamjidArray[i]);
}

// if we want noting to log after the number type is found
for(let i = 0; i <tamjidArray.length; i++){
    if(typeof tamjidArray[i] == "number") break;

    console.log(tamjidArray[i], typeof tamjidArray[i]);
}

// Looping Backwards
for(let i = tamjidArray.length-1; i >= 0; i--){
    console.log(i, tamjidArray[i], typeof tamjidArray[i]);
}

// Nested Loops
for(let exercise = 1; exercise < 4; exercise++){
    console.log("---------- Starting Exercise "+exercise);
    for(let rep = 1; rep < 6; rep++){
        console.log("Lifting weights repetition #"+rep);
    }
}

// while loop
let rep = 1;
while(rep<=5){
    console.log("Doing exercise in while loop #"+rep);
    rep++;
}

// Roll a dice until we get 6
// to get a number between 0 to 5
let num1 = Math.random() * 6;
console.log(num1); // 3.0911995059367197
// to get rid of the decimal part
let num2 = Math.trunc(Math.random()*6);
console.log(num2); // 5
// to have random dice roller between 0 to 6
let dice = Math.trunc(Math.random()*6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) + 1;
    if(dice===6) console.log(`You rolled a ${dice} and the loop is about to end...`);
}

/* Coding Challange #4
Problem - 1:
1. Create an array called "bills" containing 10 test values
2. Create empty arrays for the "tips" and the "totals"
3. Use a "calcTip" function to calculate the tip and the total bill and use a loop to perform this calculation
** if bill is between 50 to 300 then tip is 15% of the bill otherwise the tip is 20% **

Problem - 2:
Whrite a function "calcAverage" which takes an array as an arguments and calculates the average of its elements.
*/

// Solution - 1:
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        return bill * (15/100);
    } else{
        return bill * (20/100);
    }
}

for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}

console.log("The Tips are: "+tips);
console.log("The Total Bills are: "+totals);

// Solution - 2:
const sampleArray = [50,63,78,91,100,99,93,88];
function calcAverage(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log("Average of the elements of the array is: "+calcAverage(sampleArray));
console.log("Average Tips: "+calcAverage(tips));