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

// Short-circuiting

console.log("------ OR ------");

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Tamjid"); // 3
console.log("" || "Tamjid"); // Tamjid
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

// Short-circuiting will enable us to set up default values if they exist without using the ternary operators or if-else statements
// For example: let's say we have a property in our restaurent object named 'numOfGuests'. So if the property exists then the variable should be set to that value and if not then the value should be 10.

// restaurant.numOfGuest = 23;
const guest1 = restaurant.numOfGuest ? restaurant.numOfGuest : 10;
console.log(guest1);

const guest2 = restaurant.numOfGuest || 10;
console.log(guest2);

console.log("------ AND ------");

console.log(0 && "Tamjid"); // 0
console.log(3 && "Tamjid"); // Tamjid
console.log("Hello" && 23 && null && "Tamjid"); // null

// We can replace our simple if blocks with such AND short-circuiting
// example using the if block
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Cheese");
}
// example using the AND short-circuiting
restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Cheese");

// In Practical Applications:
// We can use OR operator to set default values.
// We can use AND operator to execute code in the second operand if the first one is true.
