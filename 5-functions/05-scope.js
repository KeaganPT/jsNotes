let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope() {
    y = 33;
    console.log(y);
}

scope();
console.log(y);

//VAR vs LET
//var is scoped to nearest function block
//let is scoped to the nearest enclosing block

var x = 12;

function varTest() {
    var x = 33;
    if (1 ==1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

let x = 12; //global scope

function letTest() { //functionblock  //for let is its own a enclosing block
    var x = 33;
    if(1 ==1) { //enclosingblock
        let x = 45;
        console.log(x);
    } // enclosing block
    console.log(x)
} //functionblock //for let is and enclosing block

letTest();
console.log(x);