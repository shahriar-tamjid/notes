'use strict';

// scoping, scope chain, look-up, global execution context, function execution context, call-stack
function calcAge(birthYear){
    const age = 2021 - birthYear;
    
    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
        console.log(output);
        
        if(birthYear >= 1981 && birthYear <= 1999){
            var isMillenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Shahriar';
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you are a millenial, ${firstName}.`;
            console.log(str);
            // firstName will be changed because JS always lookup in its own scope first, if nothing is found then it looks into its parent scopes.

            function add(a, b){
                return a+b;
            }
            console.log(add(2,3));
        }
        // console.log(str); // ReferenceError  // because 'const' and 'let' are block scoped
        console.log(isMillenial);  // and 'var' is function scoped (pre-ES6 feature)
        // console.log(add(2,3)); // ReferenceError // because functions are also block scoped
        // Note: this characteristic of a function being block scoped is only applicable when we are in 'strict' mode. If we are not in 'strict' mode then the function can be called outside the scope.

        console.log(output); // output is changed because here we just changed the value of an already existing variable in its parent scope. And when we called output outside the scope the updated value has been shown.

    }
    printAge();
    return age;
}

const firstName = 'Tamjid';
calcAge(1999);
