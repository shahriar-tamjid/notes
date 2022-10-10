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

// Looping through arrays --> The for-of loop

// Unpack all items in a single array then loop through all of them using the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// Output:
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

// If we want to get the index for each items using the for-of loop then we need to use the "entries()" method
for (const item of menu.entries()) console.log(item);
// Output:
// [0, 'Focaccia']
// [1, 'Bruschetta']
// [2, 'Garlic Bread']
// [3, 'Caprese Salad']
// [4, 'Pizza']
// [5, 'Pasta']
// [6, 'Risotto']

// Display the list like a real menu
for (const item of menu.entries()) {
  console.log(`Item No. ${item[0] + 1}: ${item[1]}`);
}
// Because "item" is an array and it contains 2 elements: at 0th index "entry number" and at 1st index "value"
// Output:
// Item No. 1: Focaccia
// Item No. 2: Bruschetta
// Item No. 3: Garlic Bread
// Item No. 4: Caprese Salad
// Item No. 5: Pizza
// Item No. 6: Pasta
// Item No. 7: Risotto

// To make this code more efficient we can destructure the "item" array
for (const [i, element] of menu.entries()) {
  console.log(`Item No. ${i + 1}: ${element}`);
}
// Output:
// Item No. 1: Focaccia
// Item No. 2: Bruschetta
// Item No. 3: Garlic Bread
// Item No. 4: Caprese Salad
// Item No. 5: Pizza
// Item No. 6: Pasta
// Item No. 7: Risotto
