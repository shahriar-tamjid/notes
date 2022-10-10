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

// Nullish Operator
// It works with the nullish values like null or undefined
// So if we encounter any falsy value like 0 or '' (empty string) then the nullish operator will consider this as a truthy value and short-circuit it thorugh the code

restaurant.numOfGuest = 0;
let guests = restaurant.numOfGuest || 10;
console.log(guests); // 10
// Here the OR operator skips the 0 and shows default value 10. Because it thinks 0 is a falsy value and then it shows the default value.
// But in this case 0 can actually be a truthy value. So to make computer understand that 0 can be also a value we need to use the nullish operator
// The nullish operator will neglect the 0 as a falsy value and thus we will get an output
restaurant.numOfGuest = 0;
const guestsCorrect = restaurant.numOfGuest ?? 10; // Nullish operator is hitting "??"
console.log(guestsCorrect); // 0
