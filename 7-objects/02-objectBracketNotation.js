let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);
//keys of objects are strings

console.log(garden.vegetable);  //dot notation
console.log(garden['vegetable']); //square bracket notation (used when a key breaks rule of dot notation)

let baking = {};
//Need to use square bracket notation when adding a key and value to an object
baking["cake"] = "Making a cake!"
baking["zucchini"] = "better make some bread"
console.log(baking)


let bad_obj = {
    "there isSpace": "don't do this!"
}

console.log(bad_obj["there isSpace"]);