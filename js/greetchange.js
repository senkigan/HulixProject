const greets = ["WHAT ARE YOU WATCHING TODAY?"
, "FOUND ANYTHING INTERESTING?", "WHAT DO YOU FEEL LIKE WATCHING?"];

const randomize = Math.floor(Math.random() * greets.length);

var greet = document.getElementById("heading");
greet.innerText = greets[randomize];


function hovered(object){
	console.log("works");
}