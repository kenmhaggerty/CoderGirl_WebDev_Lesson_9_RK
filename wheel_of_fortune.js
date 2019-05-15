// // wheel_of_fortune.js
// // CoderGirl WebDev (Winter 2019) — LaunchCode

// // VARIABLES /////////////////////////////////////////////////////////

// // In a normal application you would ask for user input.
// // In this exercise we will set the variables ourselves.

// // Set a secret word!

// var word = 'ANSWER'; // ALL CAPS

// // Ask player if they would like to guess a letter or guess the
// // solution.

// var isGuessingLetter = true; // set to false to guess solution

// // If they are guessing a letter, set the letter that they are
// // guessing.

// var letter = 'A'; // UPPERCASE

// // SCRIPT ////////////////////////////////////////////////////////////

// // If guessing a letter...

// 	// If the word contains the letter...

// 		// Print back the word with all instances of that letter revealed.

// 	// If the word does not contain the letter...

// 		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.

// // If guessing the word...

// 	// If they are correct...

// 		// Print "Congratulations! You won Wheel Of Fortune!"

// 	// If they are incorrect...

// 		// Print back "Nope, keep trying!"

// // End of script

var word = 'ENERGY'; // [KMH] See comment (1) below
var isGuessingLetter = false;
var letter = 'Z';

console.log("Do you want to pick a letter or guess the word?");

	if (isGuessingLetter) {

		if (letter === word[4]) { // [KMH] See comment (2) below
			console.log("_ _ _ _ " + letter + " _");
		}
		else if (letter === word[0]) { // [KMH] See comment (2) below
			console.log(letter + " _ _ _ _ _");
		}
		else if (letter === word[1]) { // [KMH] See comment (2) below
			console.log("_ " + letter + " _ " + letter + " _ " + letter);
		}
		else if (letter === word[2]) { // [KMH] See comment (2) below
			console.log("_ _ " + letter + " _ _ _");
		}
		else {
			console.log("Sorry, no " + letter + ".");
		}
	}
else {(isGuessingLetter != true) // [KMH] See comment (3) below

	if (word === "SYZYGY") {
		console.log("Congratulations! You won Wheel Of Fortune!")
	}
	else console.log("Nope, keep trying!");
}

// [KMH] COMMENTS
// (1) I think this should be `SYZYGY`? (Great word by the way!!)
// (2) This works! But since we're hardcoding our word in for now, we could probably just keep this
//     simple — for example, `if (letter === "G")`. If we did want to make our code able to handle
//     any value for `word`, how might we write code that loops through each letter of `word` to see
//     if `letter` is in it?
// (3) Just one small typo here! Since we're testing another condition, we need another `if` after
//     the `else`, and the conditional should come before the code we want to execute (that is, the
//     curly opening bracket `{`). So this should read `else if (isGuessingLetter != true) {`.

