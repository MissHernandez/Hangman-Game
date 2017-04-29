

var words = ["Inception", "Titanic", "Psycho", "Scarface"];

var wins = 0;

function hangmanGame(randomWord) {

	var guessCount = 10;

//	var currentWord = words[Math.floor(Math.random() * words.length)];

	var currentWord = randomWord;

	var blanks = currentWord.split("").map(function(){return "_"});

	var wrongGuesses = [];

	document.onkeyup = function(event) {

		var userGuess = event.key;

		var index = currentWord.indexOf(userGuess);

		document.getElementById("activeGame").innerHTML = blanks.join(" ");

		var activeGuesses = document.getElementById("alreadyGuessed");
		activeGuesses.insertAdjacentHTML("beforeend", "<span> " + userGuess + " </span>");


		if ((guessCount > 0 && blanks.indexOf("_") > -1)) {

			if (index === -1) {
				guessCount--;
				document.getElementById("numberGuesses").innerHTML = guessCount;
				wrongGuesses.push(userGuess);

			} else {

				while(index > -1) {

					blanks[index] = userGuess;
					var index =  currentWord.indexOf(userGuess,index + 1);
					document.getElementById("activeGame").innerHTML = blanks.join(" ");
				}

			}

		} else if (guessCount > 0 && blanks.indexOf("_") === -1) {

			document.getElementById("answerHeader").innerHTML = currentWord;

			wins++;
			document.getElementById("winsCount").innerHTML = wins;
			document.getElementById("alreadyGuessed").innerHTML = "";
			document.getElementById("answerHeader").innerHTML = "";
			hangmanGame(words[Math.floor(Math.random() * words.length)]);


		} else {
			document.getElementById("answerHeader").innerHTML = currentWord;
			document.getElementById("alreadyGuessed").innerHTML = "";
			document.getElementById("answerHeader").innerHTML = "";

			hangmanGame(words[Math.floor(Math.random() * words.length)]);


		}



	}

}

hangmanGame(words[Math.floor(Math.random() * words.length)]);



