"use strict";

// This is the object that contains all the necessary data
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // let's create a function "orders" which takes index of starter and main menu and returns the name
  orders: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // returning multiple values from an array by using destructuring
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = "22:00",
    address,
  }) {
    // setting default values with '=' operator
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // we can pass any object inside of a function as parameters --> function ({object})
  // we have to write the name of the object insde of curly braces {}
  // again we can destructure the object by specifying their properties inside of curly braces {}

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring Arrays //

// Destructuring means taking a big data structure and cutting it into smaller pieces.
// Like we can take an array and put it's elements into variables
const arr1 = [1, 2, 3];
const a = arr1[0];
const b = arr1[1];
const c = arr1[2];
console.log(a, b, c);
// We can destructure the array in the following way
const arr2 = [7, 8, 9];
const [x, y, z] = arr2; // It's called destructuring assignment
console.log(x, y, z);

// destructing arrays from the restaurant object
const [first, second] = restaurant.categories;
console.log(first, second);
// If we want to access the first and the third element then we just need to put a hole in our array.
// Here is how...
const [one, , three] = restaurant.categories;
console.log(one, three);

// If we want to switch two variables without destructuring then we need to create a temp variable
let [main, , , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Organic
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Organic Italian
// Now if we want to switch variables by using destructuring then we need to type:
[main, secondary] = [secondary, main]; // So we don't need any temp variable
console.log(main, secondary); // Italian Organic

console.log(restaurant.orders(2, 0)); // ['Garlic Bread', 'Pizza']
// To store these multiple values returned from a function we need to use destructuring in variables
let [starterItem, mainItem] = restaurant.orders(2, 0);
console.log(starterItem, mainItem); // Garlic Bread Pizza

// Nested Destructuring
// If we have nested array then we need to follow the basics so far and will get results
const nested = [1, 3, [2, 4]];
const [i, , j] = nested;
console.log(i, j); // 1  [2,4]
// But if we want all the separate values then we need to perform destructuring inside destructuring
const [p, , [q, r]] = nested;
console.log(p, q, r); // 1  2  4

// Default Values
let [m, n, o] = [3, 4];
console.log(m, n, o); // 3 4 undefined
[m = 0, n = 0, o = 0] = [9, 5];
console.log(m, n, o); // 9 5 0
[m = 0, n = 0, o = 0] = [9];
console.log(m, n, o); // 9 0 0

// Default values
const [p = 1, q = 1, r = 1] = [23, 29];
console.log(p, q, r);
// Here r will be 1 in the console

// This process of setting default values in destructuring is very useful while fetching data from APIs

// Destructuring Objects //

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// If we want to rename the properties in our destructured object
const {
  name: restaurantName,
  openingHours: activeHours,
  categories: tags,
} = restaurant;
console.log(restaurantName, activeHours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Using Default Values in Destructured objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// if we don't use default values then we will get "undefined"

// Mutating values while Destructuring
let a = 111;
let b = 222;
const obj = { a: 23, b: 13, c: 98 };
({ a, b } = obj);
console.log(a, b); // 23 13

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

restaurant.orderDelivery({
  time: "22:30",
  address: "Viva del Rey",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Postogola, Dhaka",
  starterIndex: 3,
});
