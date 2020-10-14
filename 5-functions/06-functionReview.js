//Functions Day Two:
// Make a function called greet 

function greet () {
    console.log(`Hello.`);
}

//say hi function

let sayHi = () => console.log("Hi");

//hello function

let hello = () => {
    console.log("Hello!");
}

//greet two

let greetTwo = function() {
    console.log("Greet again");
}

aList = ["Justin", "Ahmann"]

function printList() {
    console.log(aList);
}

printList()

function betterPrint(listParam){
    console.log(listParam)
}

betterPrint(aList);

function printName(name){
    console.log(name);
}
printName("Justin");

/* 
function printName("Justin"){
    console.log("Justin")
}
*/

printName("Adam");


function varLoop(n) {
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
}

varLoop(40);
//varLoop(40)  --> n = 40
/* 
function varLoop(40) {
    for(let i = 0; i <= 40; i++){
        console.log(i);
    }
}
*/


// make a function that takes in 3 things and prints them on seperate lines

function multiPrint(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

function listPrint(wordList){
//  for (word in wordList){
//      console.log(wordList[word])
//  }
    for (word of wordList){
        console.log(word);
    }
}

listPrint(["Justin","Adam","Joe","Amy"]);