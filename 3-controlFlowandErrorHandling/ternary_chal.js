/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 30;

// (age >= 25) ? console.log('Yay! you can rent a car') 
//             : (age >= 21) ? console.log('Yay! you can drink!')
//             : (age >= 18) ? console.log('Yay! You can vote!')
//             : console.log("Sorry, you're too young to do anything fun.");


//WEIRD PROBLEM FROM JUSTIN THAT HE IS SOLVING.
switch (true) { //needs to be true because that is the value that is being returned in the cases.
    case age > 24:
        console.log("Yay! you can rent a car!");
    case age > 20:
        console.log("Yay! you can drink!");
        
    case age > 17: 
        console.log("You can vote!");
    default: 
        console.log("Sorry you're too young to do anything fun.");
};