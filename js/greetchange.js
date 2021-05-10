const greets = ["What are you watching today?"
, "Found anything interesting?", "Handpicked just for you"
, "What do you feel like watching?"];

const randomize = Math.floor(Math.random() * greets.length);

var greet = document.getElementById("heading");
greet.innerText = greets[randomize];


function hovered(object){
	console.log("works");
}