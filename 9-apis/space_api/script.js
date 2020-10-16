const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
// const spaceShips  = document.querySelector('ul');
const spaceShips  = document.querySelector('table');


searchForm.addEventListener('submit', fetchSpace);
                            //id    ,  ^fire this function^
function fetchSpace() {
    event.preventDefault();
    fetch(baseURL) //fetch is a asynch promise
    //promises have 3 states: Pending, Fulfilled, Rejected. 
        .then(result => {
            //.then is what runs if the promise is fulfilled.
            return result.json()
            // console.log(result.json());
        })
        .then(json => {
            // console.log(json);
            displayRockets(json);
        })
}

function displayRockets(json) {
    console.log('Results:', json);
    // let rockets = json.forEach( r => {
    //     let rocket = document.createElement('li');
    //     rocket.innerText = r.name;
    //     spaceShips.appendChild(rocket);
    // })

    let rockets = json.forEach( r => {
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
}