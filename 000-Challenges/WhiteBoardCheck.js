//FizzBuzz redo

function fizzBuzz(num) {
    if(num % 4 === num % 15) {
        console.log("Fizzbuzz");
    } else if(num % 15 === 0){
        console.log("Buzz");
    } else if(num %4 === 0){
        console.log("Fizz");
    }
}

fizzBuzz(30);

//checking numbers are even after adding 2 of them together 

function checkNum(num1, num2) {
    console.log(num1 + num2);
    let sum = num1 + num2;
    if(sum % 2 === 0) {
        console.log("Sum is Even");
    } else {
        console.log("Sum is Odd");
    }
}

checkNum(3,3);
checkNum(3,8);

//Check Palindrome bronze

function checkPal(str) {
    let newWord = '';
    for( i = str.length - 1; i >= 0; i--) {
        console.log(str[i]) 
        newWord += str[i];
        console.log(newWord);
    }
    if( newWord == str) {
        console.log("This is a palindrome");
    } else {
        console.log("This is not a palindrome");
    }
}

checkPal("racecar");
checkPal("scooter");



let str = '';
console.log(str);

if(str === ''){
    console.log("why do you hurt me?")
}

//NUM PALINDROME

function CheckPalNum(num) {
    let newStr = '';
    let numStr = String(num);
    for(i = numStr.length - 1; i >= 0; i--) {
        newStr += numStr[i];
    }
    console.log(newStr == numStr);
}

CheckPalNum(112);