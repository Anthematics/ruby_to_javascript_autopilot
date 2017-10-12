var apples =14;
console.log("I have "  +apples + " apples");

var materials = [
	'wood',
	'metal',
	'stone' ,
]

var words = {
	elephant: 'The worlds largest land mammal.',
	school: 'a place of learning',
	icecream: 'A delicious milk-based dessert'
};


	var msg;
	var numb = 11;

			if (numb < 10) {
				msg = 'number is less than 10';
			} else if  (numb === 10){
				msg = 'Your number is EXACTLY 10';
			} else if (numb > 10) {
				msg ='Your number is greater than 10';
			} else {
				msg= "what are you writing?"
			}


	for (var counter = 1; counter <= 10; counter++)
	{
		 console.log("we keep printing loops");
	}
	//OR TRY THIS BELOW TO INPUT ANY MESSAGE//

	console.log("Enter a message","");
	var readline = require('readline'); //library for processing keyboard input - comes with javascript
	var rl = readline.createInterface({ //process keyboard input - key is input - search for readline.createInterface in node.js docs.
		input: process.stdin,
		output: process.stdout, // process.stdin = define the input and stdout is define output ex you can also define outputs as network interfaces (unix thing)
		terminal: false
	});

	newmessage = '';
	rl.on('line', function(line){ //probably gets triggered when you press enter and passes in the input to the next line (which in this case is a loop )

	newmessage += line
		for (var onetoten = 1; onetoten <10; onetoten++){ //Run this loop as long as onetoten is less than 10.

	console.log(newmessage)
	}
	})

	var base = 5
		for (var counter2 = 1; counter2 <=20; counter2++) {
		console.log( +base)
		}

	var total = 0
		for (var onetohund = 1; onetohund <=100; onetohund++ )
		total += onetohund

		console.log(total)
}
for (var height =3; height <=15; height++)

var msg2;
var height = 7;

 if (height >9) {
	msg2 = 'you can get on the rollarcoaster';
	}else{
	msg2 = 'you are too short for this coaster.';
	}
