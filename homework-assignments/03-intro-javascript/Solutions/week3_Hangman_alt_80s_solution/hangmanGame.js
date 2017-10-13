var hangmanGame = {
	wordsToPick: {
		"genesis" : {
			picture: 'genesis.jpg',
			song: 'Illegal Alien',
			preview: 'https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8'
		}, 
		"madonna" : {
			picture: 'madonna.jpg',
			song: 'Material Girl',
			preview: 'https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c'
		}, 
		"toto" : {
			picture: 'toto.jpg',
			song: 'Rosanna',
			preview: 'https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317'
		}, 
		"queen" : {
			picture: 'queen.jpg',
			song: 'Princes of the Universe',
			preview: 'https://p.scdn.co/mp3-preview/b84f24300476f3d3f20056d2388cc51db2e3891f'
		}, 
		"u2" : {
			picture: 'u2.jpg',
			song: 'With or Without You',
			preview: 'https://p.scdn.co/mp3-preview/28365dff1890075c1371628371cd0e5bbff9a3a3'
		}, 
		"metallica" : {
			picture: 'metallica.jpg',
			song: 'Master of Puppets',
			preview: 'https://p.scdn.co/mp3-preview/60e6f8dab43f176dd9fb5e795d4e6459bad52e9e'
		}, 
		"journey" : {
			picture: 'journey.jpg',
			song: 'Don\'t Stop Believin\'',
			preview: 'https://p.scdn.co/mp3-preview/21b9abd3cd2eea634e17a917196fdd5ba2e82670'
		}, 
		"inxs" : {
			picture: 'inxs.jpg',
			song: 'Need You Tonight',
			preview: 'https://p.scdn.co/mp3-preview/61b17a335d5afc1c4086b1b08e2400f0da147977'
		},
		"poison" : {
			picture: 'poison.jpg',
			song: 'Fallen Angel',
			preview: 'https://p.scdn.co/mp3-preview/0365ad1f152f1834b42b857c4625191cebf9f987'
		}, 
		"rush" : {
			picture: 'rush.jpg',
			song: 'Limelight',
			preview: 'https://p.scdn.co/mp3-preview/154987dfb07f2fc5ed7aa4d76b80c5dc08ff4d6b'
		}, 
		"blondie" : {
			picture: 'blondie.jpg',
			song: 'Call Me',
			preview: 'https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90'
		}
	},
	wordInPlay: null,
	lettersOfTheWord: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,
	setupGame: function() {
		// ---Pick a random word
		var objKeys = Object.keys(this.wordsToPick);
		this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

		this.lettersOfTheWord = this.wordInPlay.split('');
		this.rebuildWordView();
		this.processUpdateTotalGuesses();
	},
	updatePage: function(letter) {
		if (this.guessesLeft == 0){
			this.restartGame();
		}else{
			this.updateGuesses(letter);

			this.updateMatchedLetters(letter);

			this.rebuildWordView();

			if (this.updateWins() == true){
				this.restartGame();
			}
		}

	},
	updateGuesses: function(letter){
		//if the letter is not in the guessedLetters array
		//and
		//the letter is not in the lettersOfTheWord array
		//then
		//make guesses go down

		if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersOfTheWord.indexOf(letter) == -1)){
			
			this.guessedLetters.push(letter);

			this.guessesLeft--;

			document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;

			document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(', ');
		}
	},
	processUpdateTotalGuesses: function() {
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		// ---Render the guesses left
		document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
	},
	updateMatchedLetters: function(letter){
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
				this.matchedLetters.push(letter);
			};
		};
	},
	rebuildWordView: function() {
		var wordView = "";

		for(var i=0; i < this.lettersOfTheWord.length; i++){
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) != -1){
				wordView += this.lettersOfTheWord[i];				
			}else{
				wordView += '&nbsp;_&nbsp;';
			}
		}

		document.querySelector('#current-word').innerHTML = wordView;

	},
	restartGame : function(){
		document.querySelector('#guessed-letters').innerHTML = '';
		this.wordInPlay = null;
		this.lettersOfTheWord = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.guessesLeft = 0;
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.setupGame();
		this.rebuildWordView();
	},
	updateWins: function() {

		//this won't work for words with double or triple letters
			//var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
			//this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

		if (this.matchedLetters.length == 0){
			var win = false;
		}else{
			var win = true
		}
		
		for (var i=0; i < this.lettersOfTheWord.length; i++){
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) == -1){
				win = false;
			}
		}

		if (win == true){
			this.wins =  this.wins + 1;
			
			document.querySelector('#wins').innerHTML = this.wins;

			document.querySelector('#music').innerHTML = this.wordsToPick[this.wordInPlay].song + " By " + this.wordInPlay;

			document.querySelector('#bandDiv').innerHTML = '<img class="bandImage" src="images/' + this.wordsToPick[this.wordInPlay].picture + '" alt="' + this.wordsToPick[this.wordInPlay].song + '">';

			var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
			audio.play();


			return true;
		}else{
			return false;
		}
	}
};

hangmanGame.setupGame();

document.onkeyup = function(event) {
	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	hangmanGame.updatePage(hangmanGame.letterGuessed);
}