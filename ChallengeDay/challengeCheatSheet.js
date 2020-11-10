//!CHALLENGE 1
// Write a function that accepts two numbers as parameters. Add them together and see if the result is even. Print the number and wheter it is even or odd to the console.
function add (x, y) {
    let z = x + y;
    if(z % 2 === 0){
      console.log(`${z} is even`)
    } else {
      console.log(`${z} is odd`)
    }
  }
  add(5,4);
  //ARROW FUNCTION
  let add = (x, y) => {
    let z = x + y;
    if(z % 2 === 0){
      console.log(`${z} is even`)
    } else {
      console.log(`${z} is odd`)
    }
  }
  add(5,4);
  //!CHALLENGE 2
  // Create a pets object
  //The object should contain the following properties
  /*
  Animal - string
  Name - string
  Gender - string
  Age - integer
  Likes - array
  */
  let pet = {
    animal: "dog",
    name: "Finn",
    gender: "male",
    age: 2,
    likes: ["Chew toys", "Treats", "Being rude"],
  }
  //!CHALLENGE 3
  // Area of a Trapezoid
  // Write a function that accepts the parameters b1, b2, h 
  // You function should console.log the area of a Trapezoid
  // A = 1/2(b1 + b2)h
  function trapezoid(b1, b2, h){
    console.log((b1 +b2)/2*h)
  }
  trapezoid(3, 4, 2)
  //ARROW FUNCTION
  let trapezoid = (b1, b2, h) => console.log((b1 +b2)/2*h)
  trapezoid(3, 4, 2)
  //!CHALLENGE 4
  // bronze
  // Write a program that checks a string and tells you whether it is a palindrome(the same backwards and forwards), ie "racecar" or "hannah"
  // silver
  // Write a program that takes in a number tells you whether it is a palindrome, the incoming type is a number. 
  // ie 1001 or 12321
  // gold
  // Write a program that given, two ranges of numbers return the largest palindrome number from it's multiples,
  // so in the case of 1..100 and 1..100, The largest palindrome number would be 9009
  //Hint: To multiply each number the first step would be to take the first number from the first range multiplied by every number in the second
  // 1*1, 1*2, 1*3 ... and so on
  //What tool do you have that can do this?
  let checkStr = (str) => {
    let toCheck = str.split("")
    return toCheck.join() == toCheck.reverse().join()
  }
  console.log(
    checkStr("demo"),
    checkStr("racecar")
  )
  let checkNum = (num) => {
    let toCheck = String(num).split("")
    return toCheck.join() == toCheck.reverse().join()
  }
  console.log(
    checkNum(100),
    checkNum(1001)
  )
  let checkRange = (rangeOneMin, rangeOneMax,
    rangeTwoMin, rangeTwoMax) => {
        let results = []
        for (let x = rangeOneMin; x <= rangeOneMax; x++){
            for (let y = rangeTwoMin; y<= rangeTwoMax; y++) {
                let toCheck = String(x*y).split("")
                if (toCheck.join() == toCheck.reverse().join()){
                    results.push(x*y)
                }
            }
        }
        return results ? Math.max(...results) : false
  }
  console.log(
    checkRange(1, 100, 1, 100)
  )
  //!CHALLENGE 5
  // Create a Monsters Object 
  // the monsters object should contain three keys in the object containing a monster name
  // Each monster name key should contain an object including:
  // traits: array containing at least 2 strings
  // size: string
  // description: string
  // dangerous: boolean
  // defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string
  let monsters = {
   Ghost: {
      traits: ['spooky', 'transparent', 'ooooo'],
      size: 'Varying',
      description: 'Spooky guy that haunts you.',
      dangerous: false,
      defeatMethods: {
        exorcism: 'Use actual priest for best results.',
        holyWater: 'Super soaker is best.',
        salt: 'Season your ghost evenly.'
      }
  },
  Zombie: {
    traits: ['undead', 'slow', 'decaying'],
    size: 'Varies by corpse',
    description: 'A corpse that has come back to life hungry',
    dangerous: true,
    defeatMethods:{
      gun: "Double tap always",
      chainsaw: "Messy but effective"
    }
  },
  Vampire: {
    traits: ['undead', 'pale', 'fangs'],
    size: 'Human sized',
    description: 'A corpse that has come back to life thirsty',
    dangerous: true,
    defeatMethods:{
      stake: "Right through the heart",
      sunlight: "They do not like long walks on the beach",
      garlic: "Eat enough and humans will leave you alone too"
    }
  }
  }
  //!CHALLENGE 6
  // write a program that takes in a list of items, and sorts them into an object where they key is the first letter lowercase
  // and the objects values are arrays with the items in it.
  // ["justin", "jack", "jill", "amy", "nick"]
  // would become:
  // {
  //     "a":["amy"],
  //     "j":["jack", "jill", "justin"],
  //     "n":["nick"]
  // }
  // bonus points if the lists are in order
  names = ["Justin", "Jill", "Joe", "Amy", "Bill"]
  letterObj = {}
  for (name of names){
      keyLetter = name[0].toLowerCase()
      if (letterObj[keyLetter]){
          letterObj[keyLetter].push(name) 
      } else {
          letterObj[keyLetter] = [name]
      }
  }
  for (let key of Object.keys(letterObj)){
      letterObj[key].sort()
  }
  console.log(letterObj)