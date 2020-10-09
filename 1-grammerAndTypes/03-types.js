// Booleans
let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL better to use for an empty non value to use later in the code
let empty = null;
console.log(empty);

// UNDEFINED
let undef = undefined;
console.log(undef);

let x;
console.log(x);

// NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //javascript rounds the number when you hit 16 digits. 
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);

//STRINGS

let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = 'i\'m home'; //you need a backslash when you need an apostrophe in single quotes, double quo works fine
let stringFour = `I'm home`; // back ticks also work for strings (called interpolation)
//reason for back ticks vs quotes. adding a variable to a string back ticks

let stringFive = `You can use ${stringOne} or ${stringTwo}!`;
//to add a variable inside the string for back ticks you must use ${variable-name}
console.log(stringFive);

let first = 1050 + 100; //does math result 1150
let second = '1050' + '100'; //adds the strings together result: 1050100

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let animal = 'dog';

console.log('I have a '+ animal);
console.log(`I have a ${animal}`); //string interpolation recomended for multiple variables in a string.

// OBJECTS 

let frodo = {
    race: 'hobbit',
    rings: 1,
    isShort: true,
}

console.log(frodo);
console.log(typeof frodo);

// ARRAYS
let tacos = ['large', 4, true];
//arrays work as indexes numbered as such [0,1,2,...]

console.log(tacos);
console.log(typeof tacos);

// STRING PROPERTIES AND METHODS
let  name = 'Keagan';
console.log(name.length); //string length checks how many characters are in a string (spaces included)

console.log(name.toUpperCase());

let home = 'My home is Georgia';
console.log(home.includes('Georgia')); //Includes returns a boolean for if the string in the params are in the variable.

