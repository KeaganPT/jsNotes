let name = fName => {
    return 'Finn'
}

let myName = name();
console.log(myName);

console.log(name('bean'));

function capitalizeName(name) {
    let capName = '';
    for (l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    return capName
}

console.log(capitalizeName('kEaGaN'));

// Make a tip calculator using a function
//     Have it RETURN the value
//     Capture that returned value in a VARIABLE
//     Print that variable

function tipCalc(price,percentTip) {
    percentTip = percentTip / 100;
    let tip = price * percentTip;
    return tip.toFixed(2);
}
// tip.toFixed(2); this keeps the number at the second decimal point ex) 1.234 would be 1.23

tipCalc(15.00,20);
console.log(tipCalc(23.72, 15));
tipCalc(10.00,20);