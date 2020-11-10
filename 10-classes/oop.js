//classes 

//They are a blueprint for like things

let greet = String('Hello World');

// class Automobile {
//     //make and model are properties to the class Automobile
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//         //this keyword: 
//     }
// }
//when using class to create something like below new must be used before it
// let myCar = new Automobile('Jeep', 'Wrangler');

// console.log(myCar.make);
// console.log(myCar.model);

// Unamed vs Named Classes

//Unamed syntax
// let Vehicle = class {
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }
// }

// console.log(Vehicle.name);


//Named 
let Vehicle = class Vehicle2 {
    constructor(make, model){
        this.make;
        this.model;
    }
}

console.log(Vehicle.name);


//Methods

//Syntax 1
//old Syntax
// const automobile = {
//     start: function() {
//         //future code
//     },
//     stop: function() {
//         //
//     }
// }

// New Syntax - Prototype Method

// const automobile = {
//     start() {

//     },
//     stop() {

//     }
// }

class Automobile {
    //make and model are properties to the class Automobile
    constructor(make, model){
        this.make = make;
        this.model = model;
        //this keyword: 
    }
//constructor is only for the properties needed to make the class
    start() {
        console.log(`The ${this.make} ${this.model}'s engine started!`);
    }
    stop() {
        
        console.log(`The ${this.make} ${this.model}'s engine stopped!`);
    }
}

let myOtherCar = new Automobile('Honda', 'Civic')
myOtherCar.start()

class People{
    constructor(name, age){
        this.name,
        this.age
    }
}
//
let person = {
    name: "Justin",
    age: 27,
    //you can make methods
    speak: () => {`this is ${this.name} talkking`},
    //or
    speak2: function() {'sentence'}
}

console.log(person.name);

let person2 = new People('Adam', 25)

console.log(person.name)
person.speak()


let carMakes = ['Ford', 'Kia', 'Honda','BMW']
let carTypes = ['truck', 'car', 'bike']


let carInv = [];
for (make of carMakes){
    for(type of carTypes) {
        let tmp = new Automobile(make, type)
        carInv.push(tmp)
    }
}

console.log(carInv);