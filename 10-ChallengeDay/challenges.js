// Create a pets object
//The object should contain the following properties
/*
Animal - string
Name - string
Gender - string
Age - integer
Likes - array
*/

let pets = {
    Animal: 'dog',
    Name: 'Rista',
    Gender: 'Female',
    Age: 4,
    Likes: ['playing fetch', "eating dad's food", "meeting other  dogs"]
}


// Area of a Trapezoid
// Write a function that accepts the parameters b1, b2, h 
// Your function should console.log the area of a Trapezoid
// **Hint: A = 1/2(b1 + b2)h
function areaTrap(b1,b2, h) {
    let calc = b1 + b2;
    calc = calc / 2;
    calc = calc*h;
    console.log(calc);
}

areaTrap(12,15,10);

// bronze
// Write a program that checks a string and tells you whether it is a palindrome(the same backwards and forwards), ie "racecar" or "hannah"

let checkStr = (str) => {
    let toCheck = str.split("")
    return toCheck.join() == toCheck.reverse().join();
}

console.log(checkStr("demo"),checkStr("racecar"));

// silver
// Write a program that takes in a number tells you whether it is a palindrome, the incoming type is a number. 
// ie 1001 or 12321

let = checkNum = (num) => {
    let toCheck = String(num).split("");
    return toCheck.join() == toCheck.reverse().join();
}
console.log(checkNum(101), checkNum(1000));


// gold
// Write a program that given, two ranges of numbers return the largest palindrome number from it's multiples,
// so in the case of 1..100 and 1..100, The largest palindrome number would be 9009
//Hint: To multiply each number the first step would be to take the first number from the first range multiplied by every number in the second
// 1*1, 1*2, 1*3 ... and so on
//What tool do you have that can do this?
let results = []
for (let x = 1; x <= 100; x++){
    for(let y = 1; y <=100; y++) {
        let toCheck = String(x*y).split("")
        if(toCheck.join() == toCheck.reverse().join()){
            console.log(x*y)
            results.push(x*y)
        }
    }
}
let maxNum = results[0]
for(result of results) {
    if (result > maxNum){
        maxNum = result
    }
}
console.log(maxNum);
console.log(results);

// Create a Monsters Object 
// the monsters object should contain three keys in the object containing a monster name
// Each monster name key should contain an object including:
// traits: array containing at least 2 strings
// size: string
// description: string
// dangerous: boolean
// defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string

let Monsters = {
    DutchmansGhost : {
        traits: ["wails Loudly", "is around docks and fishing ships"],
        size: "average man",
        description: "A translucent ghost seeking reasurrence that the trade and tradition is still alive.",
        dangerous: false,
        defeatMethods: {meth1:"sing him an old fisherman's song",},
    }
}


//! monsterObject at work above


// write a program that takes in a list of items, and sorts them into an object where the key is the first letter lowercase
// and the objects values are arrays with the items in it.
// ["justin", "jack", "jill", "amy", "nick"]
// // would become:
// let nameObj = {
//     a:["amy"],
//     j:["jack", "jill", "justin"],
//     n:["nick"]
// }
// bonus points if the lists are in order


let names = ["Keagan", "Cole", "Cassie","Jada"];

let namesObj = {}

for (name of names){
    console.log(name)
    let firstLetter = name[0].toLowerCase();
    if(namesObj[firstLetter]){
        namesObj[firstLetter].push(name);
    } else {
        namesObj[firstLetter] = [name];
    }
}
console.log(namesObj);

//ABOVE IS INSTRUCTOR SOLUTION

let names = ["Keagan", "cole", "Cassie", "Jada"];

function sortStrings(names) {
    let nameContain = {}
    for(name of names){
        
    }
}

sortStrings(names);