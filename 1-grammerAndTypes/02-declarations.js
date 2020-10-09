let a = 2;

let      b     =     1;
//(1)   (2)   (3)   (4)

// 1- Keyword for variable (const, let, var) (let and var are almost the same use let when you can)
// 2- Variable name (can be almlmost anything, should give it a name that makes sense. for the next person)
// 3- Assignment Operator (assigns value)
// 4- Variable value (the value being assigned.)

console.log(a + b);
// vairable name cant lead with a number must lead with a letter, underscore, or dollar sign

let hello = 'greet';
let Hello = 'greet again';

let hiThere = 'hey'; // can't have spaces in variable names camel casing usually used


// VAR LET CONST
var x = 1; //operates weird with scope
let y = 2;  //try to use this
const z = 3; //can not be reassigned a value

// DECLARATION vs INITIALIZATION
let n; //this is the declaration, the variable is created
console.log(n);

n = 10; //this is the initalization, the variable  has been given a value.
console.log(n);


// LET vs CONST
let today = 'great!';
const elevenFifty = 'Wonderful!';

console.log(today, elevenFifty);

today = 'Lovely!';
console.log(today, elevenFifty);

elevenFifty = 'Super!';
console.log(today, elevenFifty);