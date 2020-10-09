//mini Challenge 1
let goof = {
    firstName: 'Keagan',
    lastName: 'Talbot',
    houseNumber: 15241,
    street: 'Goodtime Ct',
    city: 'Carmel',
    state: 'Indiana',
    zipcode: 46032
}

console.log(`${goof.firstName} ${goof.lastName}, ${goof.houseNumber} ${goof.street}, ${goof.city}, ${goof.state} ${goof.zipcode}`);

//Mini Challenge 2
/* 
Challenge: Use google, find MDN documentation for Strings, 
research and use the split method to get an array back from this string
*/

let sent = 'This sentence will be split into individual parts.';

console.log(sent.split(' ',8));