"use strict"

function guessNumber() {
	let userNumber = document.getElementById("number").value;

	let programNumber = Math.floor((Math.random() * 6) + 1);
	
if (userNumber == programNumber) {
		document.getElementById("correct").innerHTML = "You guessed the number right, congratulations!"
	} 

}
