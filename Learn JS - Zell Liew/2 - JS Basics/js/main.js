/* Selecting an element */

//1. Get the #star-wars-characters list with id and tag selectors.
const starwarslist = document.querySelector("#star-wars-characters");
console.log(starwarslist);
const luke = starwarslist.querySelector(".luke");
console.log(luke);
const yoda = starwarslist.querySelector(".yoda");
console.log(yoda);
const darthVader = starwarslist.querySelector(".badboy");
console.log(darthVader);

/* Changing Classes */
document.querySelector(".add").classList.add("red");

document.querySelector(".remove").classList.remove("remove");

console.log(document.querySelector(".contains1").classList.contains("blue"));

console.log(document.querySelector(".contains2").classList.contains("blue"));

document.querySelector(".toggle").classList.toggle("toggle");

/* Listening to Events*/
var button = document.querySelector("button");
button.addEventListener("click", function() {
  button.classList.toggle("cooler");
});
