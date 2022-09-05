'use strict';

//console.log(add(5,28));

// hoisting, javascript scanner filen og initializerer alle variable og functioner før kode eksekveres. De bobler ligesom op.
function add(a,b){
    return a + b;
}

                                // Anonymous function after the equal sign.. does not have a name.
const addAnonymousFunction = function(a, b) {
    return a + b;
}

// The difference between the function definitions are syntactical, not 

//console.log(addAnonymousFunction(3,6))

const addArrowFunction = (a,b) => {
    return a + b;
}

const addArrowFunctionCompact = (a,b) => a + b; // Implicit return. Fordelen er at færre linjer bruges.


// moderne programmering bruger arrowfunctions til function definition, fordi 'this' er bundet i en arrowfunction. 


function genericActionExecutor(anyCB, name) {
    // execute some code...
    return anyCB(name);
}

const spitting = (name) => `${name} is spitting.`;

genericActionExecutor((name) => console.log(spitting(name)), "Amanda");

// task create a functions that allows malte to shoot and call it.
// task result should be: Malte is shooting.

const shooting = (name) => `${name} is shooting.`;

console.log(genericActionExecutor(shooting, "Malte"))

// Task create a SINGLE statement below that console logs "Murrat is running away."

console.log(genericActionExecutor((name)=> `${name} is running away.`, "Murat"))

