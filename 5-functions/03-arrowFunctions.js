// CONCISE BODY

let hi = () => console.log('hi');

// BLOCK BODY

let hi = () => {
    console.log('hi');
}

// CONCISE vs BLOCK
let apples = (x) => console.log(`There are ${x} apples.`); //paranthesis around params only needed for more than 1 variable

apples(3);

let apples = x => {
    console.log(`There are ${x} apples.`)
}
apples(8);