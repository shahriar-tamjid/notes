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

// Spread Operator: It is used to combine two arrays

const arr = [7, 8, 9];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]]; // [1, 2, 3, 7, 8, 9]
console.log(badNewArr);
// Same thing by using spread operator
const newArr = [1, 2, 3, ...arr];
console.log(newArr); // [1, 2, 3, 7, 8, 9]
// Again when we need to pass the elements of an array individually we need to use spread operator
console.log(...newArr); // 1 2 3 7 8 9

// If we want to add items in our main menu
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets ... NOT objects
// Spread operators can be used in iterables
const str = "Shahriar";
const letters = [...str, " ", "T."];
console.log(letters); // ['S', 'h', 'a', 'h', 'r', 'i', 'a', 'r', ' ', 'T.']

// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)];
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

// We can even spread objects by using spread opercoator
const newRestaurant = {
  ...restaurant,
  foundedIn: 1999,
  founder: "Guiseppe",
};
console.log(newRestaurant);

// Copy objects with spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurant.name); // Classico Italiano
console.log(restaurantCopy.name); // Ristorante Roma

/////// Important Lines ///////
// 1. The spread operator is used to unpack an array.
// 2. The Rest operator is used to pack elements into an array.

// Rest is kinda like another version of destructuring

// SPREAD, because on RIGHT side of '='
const spreadArray = [1, 2, ...[3, 4, 5]];
console.log(spreadArray);

// REST, because on LEFT side of '='
const [p, q, ...others] = [1, 2, 3, 4, 5];
console.log(p, q, others);

// We can use both Spread and Rest operators at the same time
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// N.B: The Rest element must be the last element. like: [a, b, ...c, d] such formats is not allowed

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Remember: {} in objects, [] in arrays

// If we have an array that needs to be passed into a function in order to process in the program, then we can use the SPREAD operator while passing the name of the array.
// It will enable us to perform the operation without looping through the entire array.
// Like: Inspite of this --> for(let i=0; i<array.length; i++) { function(array[i]) }
// We can now do this --->   function(...array);

// Functions

// If we are uncertain about the number of incoming arguments then we should use the SPREAD operator as the argument of our function.
const add = function (...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
};
add(2, 3); // 5
add(1, 3, 5, 6, 7, 78); // 100
add(1, 24, 5, 6, 87, 8, 9, 9, 0, 0, 8, 5, 3, 2); // 167

// With SPREAD operator we expand ---> Convert arrays into individual variables
// With REST operator we compress ---> Convert multiple variables into one single array

// Again if we have an existing array and want to pass its elements into the add() function then we can simply use the SPREAD operator
const x = [23, 5, 7];
add(...x); // 35

// Calling the orderPizza() function
restaurant.orderPizza("Chicken", "Mushroom", "Onion", "Garlic", "Cheese");
