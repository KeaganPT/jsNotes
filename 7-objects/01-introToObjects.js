

let demoArray = [1,2,3,[4,5,6]];
console.log(demoArray[3][1])

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};


// //this is ll the object
// console.log(netflix);
// //the show name
// console.log(netflix.name);
// // this is an ep name
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//HINT use indexing with dot notation #bronze
let showname; //Here assign "The Office"
//Here use dot notation and the .length prop  #silver
let season1EpCount; //Here assign 6
//here use a for loop to assign     #gold+
let epNames = []; //Here Assign an array of the episode names

showname = netflix.name;    //bronze answer
console.log(showname);

season1EpCount = netflix.season1.seasonInfo.episodeInfo.length;  //silver answer
console.log(season1EpCount);

for (ep of netflix.season1.seasonInfo.episodeInfo){     //Gold option 1 for of loop
    console.log(ep.episodeName);
    epNames.push(ep.episodeName);
    
}
console.log(epNames);
//Gold .forEach() option
let epDetails = netflix.season1.seasonInfo.episodeInfo
epDetails.forEach((data) => epNames.push(data.episodeName));
console.log(ep.epNames);


//using an obj constructor
let numString = String(5);
//using an obj literal
let numString2 = "5"


let weather = {
    temp: 88, 
    isRaining: false
}

// JSON <- Javascript Object Notation

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//Returns An Array of the keys of an object
console.log(Object.keys(spaceJam.toonSquad));

//the keys of the string returned are the keys to the characters in the string.
console.log(Object.keys(spaceJam.toonSquad.duck));
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.toonSquad));