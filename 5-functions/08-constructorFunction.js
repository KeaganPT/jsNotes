function Person(name, age, canVote){
    // Person.name = name
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

console.log(typeof Person);

let person4 = new Person('Justin', 80, true);
let person5 = new Person('Amy', 54, true);
console.log(person4);
console.log(person5.name);

persona4.name = 'Adam';
//or persona4['name'] = 'Adam'
console.log(person4.name);