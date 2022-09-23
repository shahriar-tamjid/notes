let js = 'amazing';
console.log(40+78+33-89-13);
console.log("Tamjid");
let firstName = "Shahriar";
console.log(firstName);
let myFirstJob = "JavaScript Developer";
console.log(myFirstJob);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof myFirstJob);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

// A Bug
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1999;

var job = "developer";
job = "analyst";

// Arithmatic Operators
const now = 2037;
const ageTamjid = now - 1999;
const agePeter = now - 2003;
console.log(ageTamjid, agePeter);
console.log(ageTamjid * 8, ageTamjid / 10, 2 **3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8
const firstName = "Shahriar";
const lastName = "Tamjid";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageTamjid > agePeter);
console.log(agePeter <= 30);

const fullAge = agePeter >= 32;
console.log(now - 1999 > now - 2003);

// Operator Precedence
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageTamjid + agePeter) / 2;
console.log(ageTamjid, agePeter, averageAge);


// coding exercise 1

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight**2;
let johnBMI = johnWeight / johnHeight**2;

let markHeigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: "+markBMI);
console.log("John's BMI: "+johnBMI);
console.log("Mark's BMI > John's BMI ? ===> "+markHeigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight**2;
johnBMI = johnWeight / johnHeight**2;

markHeigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: "+markBMI);
console.log("John's BMI: "+johnBMI);
console.log("Mark's BMI > John's BMI ? ===> "+markHeigherBMI);

const firstName = "Tamjid";
const job = "Data Analyst";
const company = "BlackRock";
const birthYear = 1999;
const currentYear = 2021;

const shahriar = "I'm "+firstName+", a "+(currentYear - birthYear)+" years old "+job+", currently working at "+company+" !";
console.log(shahriar);

// Template Literals are a whole new replacement of concatenation.
const template_literals = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}, currently working at ${company} !`;
console.log(template_literals);
console.log(`This is a
multi-line
string`);

// if-else
const age = 15;

if(age >= 18){
    console.log("Tamjid is old enough to obtain a driving license. 🏎🏍");
} else{
    const yearsLeft = 18 - age;
    console.log(`Tamjid needs to wait another ${yearsLeft} years to obtain a driving license.`);
}

const birthYear = 1999;
let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}
console.log(`The person was born in ${century} century`);

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight**2;
let johnBMI = johnWeight / johnHeight**2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI is ${markBMI}, which is higher than John's BMI which is ${johnBMI}`);
} else{
    console.log(`John's BMI is ${johnBMI}, which is higher than Mark's BMI which is ${markBMI}`);
}

// Type Conversion
const inputYear = "1991";
console.log(inputYear + 20);
console.log(Number(inputYear) + 20);
console.log(inputYear, Number(inputYear));
console.log(String("23"), 23);

// Type Coerction
// Type coercion is the automatic or implicit conversion of values from one data type to another. For example, converting a string value to an equivalent number value.
console.log("I am "+21+" years old!");
console.log("23"-"10"-3);
console.log("23"-"10"+3);
console.log("23"+"10"+3);
console.log("23"*"2");
console.log("22"/"2");
console.log("24">"31");

// Truthy Values & Falsy Values
// 5 Falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean("Tamjid"));
console.log(Boolean(""));
console.log(Boolean(123));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(NaN));
console.log(Boolean(67+89));
console.log(Boolean(null));

const money = 0;
if(money){
    console.log("Don't spend money!");
} else{
    console.log("Save some money for the future!");
}

let height = 0;  // It's a bug. Because height = 0 is defined value.
if(height){
    console.log("Yay! Height is defined!");
} else{
    console.log("Shit! Height is UNDEFINED!");
}

// Equal Operators
const age = "18";
if(age === 18){
    console.log("You just became an Adult! (strict equal)");
}
if(age == 18){
    console.log("You just became an Adult! (loose equal)");
}

const favNum = Number(prompt("What is your favourite number?"));
console.log(favNum);
console.log(typeof favNum);

if(favNum === 3){
    console.log("Cool! 3 is a great number.");
} else if(favNum === 7){
    console.log("7 is also a cool number.");
} else if(favNum === 13){
    console.log("13 is also a cool number.");
}
else{
    console.log("It's a meh number.");
}

if(favNum !== 13) console.log("Why not 13?");
// !== is the strict not equal sign ... the loose not equal is !=

// Logical Operations
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision){
    console.log("Tamjid is able to drive!");
} else{
    console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Tamjid is able to drive!");
} else{
    console.log("Someone else should drive...");
}

// coding challange 2

const scoreDolphins = (96+108+89) / 3;
const scoreKoalas = (88+91+110) / 3;
console.log("Dolphins: "+scoreDolphins+" Koalas: "+scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy!");
} else if(scoreKoalas > scoreDolphins){
    console.log("Koalos win the trophy!");
} else if(scoreDolphins === scoreKoalas){
    console.log("Both win the trophy!");
}

// BONUS 1
const scoreDolphins = (97+112+80) / 3;
const scoreKoalas = (109+95+50) / 3;
console.log("Dolphins: "+scoreDolphins+" Koalas: "+scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy!");
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalos win the trophy!");
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy!");
} else{
    console.log("No one wins the trophy :(");
}

// switch statement
const day = "Sunadaay";
switch(day){  // day === "Monday"
    case "Monday":
        console.log("Plan Course Structure");
        console.log("Go to coding meetup");
    break;
    case "Tuesday":
        console.log("Prepare Theory Videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code examples");
        break;
    case "Friday":
        console.log("Record videos");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day.");
        break;    
}
// same thing using if-else
const din = "Thursday";

if(din === "Monday"){
    console.log("Microprocessor");
} else if(din === "Tuesday"){
    console.log("EEE");
} else if(din === "Wednesday"){
    console.log("Theory of Computing");
} else if(din === "Thursday" || din === "Friday" || din === "Saturday"){
    console.log("It's holiday ... Enjoy!");
} else if(din === "Sunday"){
    console.log("Microprocessor Lab");
} else{
    console.log("Not a valid day.");
}

// Conditional Operator (Ternary Opeartor)
const age = 21;
age >= 18 ? console.log("I like to drink beer!") : console.log("I'm not allowed to drink beer :(");
const drink = age>=18? "Beer :)" : "Water :(";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "Beer :)" : "Coke :("}`);


// Coding Challange 4
const bill = 40;
const tip = 50 <= bill && bill <= 300 ? (bill * 15/100) : (bill * 20/100);
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total bill is ${total}`);
