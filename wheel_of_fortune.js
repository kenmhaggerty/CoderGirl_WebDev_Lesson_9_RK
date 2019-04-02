var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var word = 'ENERGY';
var isGuessingLetter = false;


rl.question('Do you want to A: pick a letter, or B: guess the word? ', function([isGuessingLetter]) {

	var msg = '';

	if(isGuessingLetter === 'A')

		msg = 'Great!';

	else msg = 'Wonderful!';
			
  console.log(msg);

 rl.question ('Choose a letter.', function([letter]) {

 		var msg = 

 		if(letter === word[1] , function([letterGuess]) {

 			msg = ('_ ' + letter + ' _' + letter + '_ ' + letter);
 		}
	}
}
  rl.close();
})

// console.log("Do you want to pick a letter or guess the word?");

// 	if (isGuessingLetter) {

// 		if (letter === word[4]) {
// 			console.log("_ _ _ _ " + letter + " _");
// 		}
// 		else if (letter === word[0]) {
// 			console.log(letter + " _ _ _ _ _");
// 		}
// 		else if (letter === word[1]) {
// 			console.log("_ " + letter + " _ " + letter + " _ " + letter);
// 		}
// 		else if (letter === word[2]) {
// 			console.log("_ _ " + letter + " _ _ _");
// 		}
// 		else {
// 			console.log("Sorry, no " + letter + ".");
// 		}
// 	}
// else {(isGuessingLetter != true)

// 	if (word === "SYZYGY") {
// 		console.log("Congratulations! You won Wheel Of Fortune!")
// 	}
// 	else console.log("Nope, keep trying!");
// }