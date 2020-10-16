/*
v---returns a promise
fetch()
    .then(x) //* if you use one callback, that is on Fulfilled
    .then(x , y) //* x will happen if fulfilled, 
                  //*y will happen on rejection
    .catch(x) //* this will happen if rejected

fetch().then(x<if worked>, y<if failed>)

fetch()
    .then(x) <//*if it worked>
    .catch(x) < //*if it failed>

const result = await fetch();
const json = await result.json();   //*await is a keyword
console.log(json);
*/


const request = async () => {
    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json();
    return json
}

request().then(json => {
    console.log(json.url);
    let dogImageTag = document.createElement("img");
    dogImageTag.src = json.url;
    document.body.appendChild(dogImageTag);
})

// const mtProm = new Promise((resolve, reject) => {
//     console.log(json)
// })