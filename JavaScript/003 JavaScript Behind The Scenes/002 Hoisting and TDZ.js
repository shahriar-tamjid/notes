// Hositing and TDZ (Temporal Dead Zone)

// console.log(me); // undefined
// console.log(job); // ReferenceError // TDZ
// console.log(year); // ReferenceError // TDZ

var me = 'Tamjid';
let job = 'Software Developer';
const year = 1999;

// Functions

console.log(addDecl(2,3)); // Here we were able to call "Function Declaration" before it was actually defined in the code.
// console.log(addExpr(2,3)); // Here "Function Expression" will not work because it refers functions as a variable and we can't access any variable until it's defined.
// console.log(addArrow(2,3)); // Here "Arrow Function" will not work because it refers functions as a variable and we can't access any variable until it's defined.

function addDecl(a, b){
    return a + b;
}

const addExpr = function(a, b){
    return a + b;
};

const addArrow = (a,b) => a + b;

// Example
// Why "Function Declaration" and "var" can be dangerous sometimes ... Here is a situation when we want to delete the products of shopping cart when the number of products are 0. But let's observe now

if(!numOfProducts) deleteShoppingCart();

var numOfProducts = 10;
// because of hoisting by calling var numOfProducts before declaration its value gets set to 'undefined' which is a falsy value and because of the condition if block gets executed.

function deleteShoppingCart(){
    console.log('All products are deleted!');
}

// JS considers var as a function in its window object (window is a global object of JS)
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false'
