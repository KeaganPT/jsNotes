/*Fizz Buzz Conditionals Challenge
- create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5 
*/

let FB = 15;
//If Else statement
if (FB % 3 == 0) {
    if(FB % 5 == 0 ){
        console.log("FizzBuzz");
    } else if (FB % 3 == 0) {
    console.log("Fizz");
    }
} else if(FB % 5 == 0) {
    console.log("Buzz");
} 

//Switch

(FB % 3 == 0 && FB % 5 == 0) ? console.log("FizzBuzz") 
: (FB % 3 == 0) ? console.log("Fizz") : (FB % 5 == 0) ? console.log("Buzz"): console.log("missed");


// switch
switch (true) {
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log("FizzBuzz");
        break;
    case (FB % 3 == 0): 
        console.log("Fizz");
        break;
    case FB % 5 == 0:
        console.log("Buzz");
        break;
    default: 
        console.log("missed");
}

//for loop 
// - write a for loop running between the numbers 0 - 100
//     - for multiples of 3, instead of the number, console.log "Fizz"
//     - for multiples of 5 console.log "Buzz";
//     - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
//     - for any other number, console.log the value

for (FB = 0; FB <= 100; FB ++) {
    if (FB % 3 == 0) {
        if(FB % 5 == 0 ){
            console.log("FizzBuzz");
        } else if (FB % 3 == 0) {
        console.log("Fizz");
        }
    } else if(FB % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(FB);
    }
}