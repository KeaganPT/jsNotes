// DECLARATION

function hi() {
    console.log("HI");
}

hi();

// EXPRESSIONS

let hello = function() {
    console.log("Hey!");
}

hello();

//* FUNCTION EXAMPLES
function addIt() {
    console.log(5+10);
};

addIt();

function counting() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}

counting();

//Function Challenge 1 
// Given this array, create a function to list out this array

let arr = ['This', 'is', 'really', 'cool'];

function list(item) {
    for (i in item) {
        console.log(item[i]);
    }
}

list(arr);

function weeWoo() {
    console.log('Help! I need an instructor!');
}
