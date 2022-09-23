// The 'this' keyword
console.log(this); // so by default the 'this' keyword is a window object or the global object
// but if we use the 'this' keyword inside a function then we get...
const calcAge2 = function(birthYear){
    console.log(2021 - birthYear);
    console.log(this); // now the 'this' keyword is 'undefined', but it's only possible in strict mode
}
calcAge2(1999);
// again if we use 'this' keyword inside an arrow function then we get
const calcAgeArrow = birthYear => {
    console.log(2021 - birthYear);
    console.log(this); // now the 'this' keyword is a window object or the global object
    // because Arrow functions don't get their own 'this' keyword if they get any then they point to the 'this' keyword of their parent scope, in this case it's the global object of line-88
}
calcAgeArrow(1999);
// now let's use 'this' keyword inside of an object
const tamjid = {
    year: 1999,
    calcAge3: function(){
        console.log(this); // here the 'this' keyword refers to the whole 'tamjid' object
        console.log(2021 - this.year); // here 'this' means the owner of the object which is 'tamjid'
    },
};
tamjid.calcAge3();

// there is a term called 'method borrowing' in this case we can simply borrow functions/methods from another object and use them in new objects without duplicating them. Example:
const shahriar = {
    year: 2001,
}
shahriar.calcAge4 = tamjid.calcAge3; // method borrowing
shahriar.calcAge4(); // correct result
// in this case the 'this' keyword is pointing to the object named 'shahriar'
// So: THE "THIS" KEYWORD ALWAYS POINTS TO THE OBJECT THAT IS CALLING THE METHOD.
