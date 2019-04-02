var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Do you want to A: pick a letter, or B: guess the word? ", function([aorb]) {

	var msg = "";

	if(aorb === "A")
		msg = "What letter do you want?";
	else (aorb === "B") 
		msg = "What is the word?";
			

  // TODO: Log the answer in a database
  console.log(msg);

  rl.close();
})