let store = document.querySelector(".store");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let searchForm = document.querySelector("form");

searchForm.addEventListener('submit', display);

function display(){
  event.preventDefault();
  console.log(store.value, product.value, quantity);
}