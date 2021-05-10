const greets = ["What are you watching today?"
, "Found anything interesting?", "Handpicked just for you"
, "What do you feel like watching?", "Just pick something already (╯°□°)╯︵ ┻━┻"];

const randomize = Math.floor(Math.random() * greets.length);

var greet = document.getElementById("heading");
greet.innerText = greets[randomize];


function hovered(object){
	console.log("works");
}