let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza');
console.log('push:', food);

food.splice(1, 1, 'bananas');
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('spice2:', food);

// food.splice(0, 3 , 'Turkey');
// console.log('splice3:', food);

food.pop();
console.log('pop:', food);

food.shift();
console.log('shift:', food);

food.unshift('Popcorn','Steak');
console.log('unshift:', food);

dogs.push('Bull Terrier');
dogs.unshift('Great Dane', 'Husky');

console.log(dogs);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu','German Shepherd'];

// regular for loop
// for (i = 0; i < dogs.length; i++){
//     console.log(dogs[i]);
// }

// forEach()
dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog)
})

dogs.forEach((dog, index) => {
    console.log(dog);
    console.log(index);
})

let movies = ['James and the Giant Peach','Iron Giant', 'Wallace and Gromet: Curse of the Were-rabbit'];

movies.forEach(movie => console.log(movie));
movies.push('Chicken Run');
console.log(movies);
movies.splice(0,1,'The Goonies');
movies.forEach(movie => console.log(movie));

let arr = [1,2,3,4,5];

if (arr instanceof Array) {
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num));
} else {
    console.log('ope, not an array');
}


//what if statement looks for if == and === arent used
// "" false   "string" true
// 0 false    1 true