class Animal {
    constructor(name){
        this.name = name;
    }

    eat() {
        console.log(`the ${this.name} eats their food.`)
    }
}

let myAnimal = new Animal("Tiger")

// class HousePet {
//     constructor(isTrained){
//         this.isTrained = this.isTrained
//     }
// }

console.log(myAnimal.name);

myAnimal.eat();

class Dog extends Animal {
    constructor(name, isTrained, breed){
        super(name);
        this.type = breed;

    }
    play() {
        console.log(`${this.name} fetches the ball`)
    }
}




let finn = new Dog('Finn', 'Shibu Inu')
finn.eat()
finn.play()

class HouseDog extends Dog{
    constructor(name, breed, isTrained){
        //SUPER MUST BE AT TOP OF CONSTRUCTOR
        super(name, breed)
        this.isTrained = this.isTrained;
        
    }
}

myIndoorDog = new HouseDog("spongie", "lab", true)
myIndoorDog.eat();


//FOUR MAIN PRINCIPLES
// APIE Abstraction, Polymorphism, Inheritance and Encapsulation.

//Abstraction
console.log() // I dont need to know how this works


//Polymorphism
//Polymorphic means to change or multiple changes
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    print() {
        console.log(`x:${this.x},y:${this.y}`)
    }
}

class Point2 extends Point{
    constructor(x,y,z){
        super(x,y);
        this.z = z;
    }
    print(){
        console.log(`x:${this.x} y:${this.y} z:${this.z}`)
    }
}

let myPoint = new Point(5,6)
myPoint.print()

let myPointTwo = new Point2(5,6,7)
myPointTwo.print()

//Inheritance
//Through Inheritance we don't need to make the 
//Properties this.name // this.breed 
//or the methods eat() // play()
// class HouseDog extends Dog{
//     constructor(name, breed, isTrained){
//         //SUPER MUST BE AT TOP OF CONSTRUCTOR
//         super(name, breed)
//         this.isTrained = this.isTrained;
//     }
// }

//Encapsulation
x = {
    data: 5,
    displayData(){
        console.log(this.data)
    }
}
y = {
    data: 6,
    displayData(){
        console.log(this.data)
    }
}

x.dsiplayData()
console.log(x.data)


//end of day application, creating methods in objects and creating blueprints 

let testObj = {
    myLog: (x) => console.log(x)
}

testObj.myLog("This is a test of myLog");