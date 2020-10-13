let arrFunc = () => {
    console.log("This is a fat arrow function");
}
//arrow functions can only be called after it is initialized or made
arrFunc();
stdFunc();
//std funcs can be called and used above where it was made
function stdFunc () {
    console.log("this is a standard function");
}