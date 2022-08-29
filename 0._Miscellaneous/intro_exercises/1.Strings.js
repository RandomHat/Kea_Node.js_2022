// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

result1 = +numberOne + +numberTwo
result2 = parseFloat(numberOne) + parseFloat(numberTwo)

// Hvilken er best practise?

console.log("Exercise 1:", result1,result2)


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log("Exercise 2:" ,(+anotherNumberOne + +anotherNumberTwo).toFixed(2))

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

function avrg(arr){
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    return sum/arr.length
}

console.log("Exercise 3:", avrg([one,two,three]).toFixed(5), ((one+two+three)/3).toFixed(5));



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Exercise 4:", letters.charAt(2))

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log("Exercise 5:", fact.replace("j", "J"));


// --------------------------------------



