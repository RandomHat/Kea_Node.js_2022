// --------------------------------------
// Variables, strings, numbers
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";


// Print out the following in the console:
// My first name is Anders and my last name is Latif

// first solution
const out = `My first name is ${firstName} and my last name is ${lastName}`

// Wanted to remeber using comma in log.
console.log("My first name is", firstName, "and my last name is", lastName)

console.log(out)

// Types of strings

const messageOne = "I can write easily"
const messageTwo = 'wow " does not need escaping';
const messageThree = `""''""''""`

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2021";
const number = 1;

// Add the year plus the number
// The result should be 2022
// You cannot touch line 1 or 2

const sum = number + parseInt(year)

console.log(sum)

// Other solutions
const two = Number(year) + number;
const one = ~~year + number;
const three = +year + number;

// Differences
console.log(parseInt("123124Sdfs34")) //Parses as much as possible
console.log(Number("123124Sdfs34")) //Insists the string is a number (retuns the number NaN)

// --------------------------------------

