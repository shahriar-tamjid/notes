const tamjid = {
    firstName: 'Shahriar',
    year: 1999,
    calcAge: function(){
        console.log(2021 - this.year);

        // Pre-ES6 solution
        // const self  = this; // self or that
        // const isMillenial = function(){
        //     console.log(self.year >= 1985 && self.year <= 1999);
        // };
        // isMillenial(); // result will be TypeError because we don't have any this keyword inside a whole function call

        // Post-ES6 solution
        // As Arrow function uses the this keyword of its parent scope so here the this will reference to the this of tamjid object.
        const isMillenial = () => {
            console.log(this.year >= 1985 && this.year <= 1999);
        };
        isMillenial(); // result will be TypeError because we don't have any this keyword inside a whole function call
    },
    // greet: () => console.log(`Hey ${this.firstName}`),
    greet: function(){
        console.log(`Hey ${this.firstName}`);
    },

    // IMPORTANT NOTE:
    // ARROW FUNCTION INHERITS THE "THIS" KEYWORD FROM ITS PARENT SCOPE.
};
tamjid.greet(); // Hey undefined
// because arrow functions don't get their own this keyword that's why JS finds 'this' in window object
tamjid.greet(); // Hey Shahriar
// now the function gets its own this keyword
tamjid.calcAge();

// arguments keyword
const addExpr = function(a, b){
    console.log(arguments);
    return a + b;
};
// arguments is a keyword that stores all the arguments of functions in an array
// Arrow functions don't get their arguments keyword
addExpr(1,3); // 0->1, 1->3
addExpr(2,5,8,12); // 0->2, 1->5, 2->8, 3->12

const addArrow = (a,b) => {
    console.log(arguments);
    return a + b
};
addArrow(3,4,5); // ReferenceError
