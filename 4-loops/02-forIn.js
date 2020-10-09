let student = {
    name: "Justin",
    awesome: false,
    degree: "JavaScript",
    week: 1
}

//item in this loop is refering to the keys
for (item in student) {
    // console.log(item);
    // console.log(student[item]);
}

let cats = ['tabby', 'british shorthair', 'burmese']

// for (cat in cats) {
//     console.log(cat);
//     console.log(cats[cat]);
// }

/*
CHALLENGE
-write a for in loop that cpitalizes the first letter of the name and lower cases the rest of the name
*/
//Answer:
let name = 'kEaGaN tALbot'
let capName

for (i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}

console.log(capName);