'use strickt';

// Never Ever do thiss!!
// totalGlobalVariable = "malte"
// var totalGlobalVariable = "malte"

// variable declaration
const me = {
    name : "anders"
}
 
// const needs to be assigned at creation, and can't be reassigned. However it can still be changed, after creation. 
// It can be incremented, it can contain an array, object etc.
// const er ikke "immutable".


{
    // inside new scope
    let someValue = true;
    {
        // new lexical scope, new stack is created.
        let someValue = false;
    } // scope is done, stack is destroyed.

    console.log(someValue) // returns true.
}

for (var i = 0; i<5;  ii++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
// var er ikke bundet til for-loopets scope, så mens for-loopet kører incrementer i. 
// interview spørgsmål, hvordan kan man løse det. (skriv let i stedet for).

//Guideline for variabler brug const. 