// CHALLENGE
// ************
//     Bronze:
//     Write an if else statement that checks your name;
//     If it is your name, console log '<name>'
//     If the name does not match, console.log 'Hello, what is your name?'
//     Silver:
//     If It is your name, console log 'Hello, my name is <name>'
//     Gold:
//     If it is not your name, console log 'Hello, is your name <name here> ?'

//ANSWER
// let name = 'Keaga';

// if (name == 'Keagan') {
//     console.log(`Hello, my name is ${name}!`); 
// } else {
//     console.log('Hello, is your name ' + name +'?');
// };




/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/


//NOTES: 
//1)charAt(<num>) is a method that checks the character space in a spring.  
//<easier way of this is to remember strings are alos have square braces [] still work.>
//2) substring() omits a character space in a string

// let name = 'zAchARy';

// if(name.charAt(0) === name.charAt(0).toUpperCase()){
//     console.log(name[0] + name.substring(1).toLowerCase());
// } else {
//     console.log(name[0].toUpperCase() + name.substring(1).toLowerCase());
// };

// //Instructor answer

// if (name[0] == name[0].toUpperCase()) {
//     let isUppercase = name[0] + name.slice(1).toLowerCase();
//     console.log('console.log #1:', isUppercase);
// } else {
//     let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     console.log('console log #2', notUppercase);
// }


// //DOT NOTATION MINI LESSON
// let student = {
//     name : "Justin",
//     grade : 12
// };

// console.log(student.name);

// let names = ["Justin", "Adam", "Amy"];



// // ways to access an object
// console.log(student.name); //use dot notation if possible
// console.log(student["name"]);

// //ways of accessing an array
// console.log(names[2]);


//Switch Statements

let officeCharacter = "Pam";

switch (officeCharacter) {
    //kinda like if officeCharacter == "Michael";
    case "Michael":
        console.log("My mind is going a mile an hour.");
        break; //break will leave the switch after the block (the case code) runs
    case "Dwight": 
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galatica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
};

//the param in switch checks the value against the cases

let dessert = 'carrots';

switch (dessert) {
    case 'pie':
        console.log('pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default: 
        console.log('Not on the menu.');
};

//else if tangent
//functionally equivalent to switch statements.

if (dessert == "cake") {
    console.log('Cake is great!');
} else if (dessert == "cake") {
    console.log('I scream for ice cream!');
} else {
    console.log('Not on the menu.');
};

// Ternary: 
let num = 6;

// () ? true : false
// check if something is true (?) if true run true statement if false run false statement;
(num > 0) ? console.log('yes') : console.log('no');

//also can be written as:
// (num > 0) ? console.log('yes') 
//           : console.log('no');