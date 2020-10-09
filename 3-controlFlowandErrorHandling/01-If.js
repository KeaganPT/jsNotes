let isOn = false; //originally true
// if(<some expression>) {<do something>}
// if (isOn == true) {
//     console.log('The light is on!');
// };

if (isOn) {
    console.log("The light is on!")
}

if(isOn == false) {
    console.log("The light is off.");
};


let weather = 75;

// if (weather < 70) {
//     console.log('Wear a jacket.');
// };

if (weather < 70) {
    console.log('Wear a jacket.');
} else { // else can follow an if statement and will fire 
    //if the above statement didn't
    console.log('No Jacket no Problems!');
};

