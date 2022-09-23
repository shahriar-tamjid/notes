// Primitives vs Objects (Primitive Types vs Reference Types)
// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob', 'Clark'], // an array is essentially an object behind the scenes.
};

// we can copy the whole object to a new one by using "Object.assign"
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);
// However Object.assign only copy object on the first level, which means if we have an object inside an object then the copied object will still contain the same reference of its inner object. To avoid this we need to do a Deep Clone. And we need a library named "Lo-Dash" to do so...
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);
