var sentence1 = "Otto bought a racecar he cannot afford.";
var sentence2 = "Otto lost the deed to his house.";
var sentence3 = "Otto needs Xanax.";

//#xample for special characters bonus.
var sentence4 = "On the way to get Xanax, Otto found a Kayak. He couldn't believe his luck!";


function palindromeDetector (s) {

  //To hold the array of reversed words.
  var reversedArray=[];

  //To hold split the sentence into an array of words.
  var words = s.split(' ');

  //To hold words to be shown on page.
  var showOnPage = [];


  //Loops over each word
  for (var i=0;i<words.length;i++){


    //Removing all non-letters with RegEx for bonus.
    words[i] = words[i].replace(/[^a-zA-Z]+/g, "");

              /* OR */

    //Basic, just replacing the period.
    //words[i] = words[i].replace(".", "");

    //Splits current word into an array of letters.
    var letters = words[i].split("");


    //Using .reverse method

    //Reverses letter array and then joins them into a string.
    //reversedAndJoined = letters.reverse().join("");

                    /* OR */


    //Without using .reverse

    //Blank string to hold the reversed word.
    reversedAndJoined = "";

    //Loops BACKWARDS over the letter array.
    for(var l = letters.length-1; l >= 0;l--){

      //Adds the letters to the string above.
      reversedAndJoined = reversedAndJoined + letters[l];
    }

    //Adds individual reversed word to the array of reversed words.
    reversedArray.push(reversedAndJoined);
  }

  //Loops over the array of reversed words.
  for(var j=0; j<reversedArray.length;j++){

    //Checks to see if a word is longer than one letter and checks the reversed word agains the unreversed word. (Using toLowerCase so it will ignore any capital letters).
    if ((reversedArray[j].length > 1) && (reversedArray[j].toLowerCase() == words[j].toLowerCase())){

      //If its a palindrome, it wraps the word in a span to make it red, then pushes it to the showOnPage array.
      showOnPage.push('<span style="color:red">' + reversedArray[j] + '</span>');

    } else{
      //Not a palindrome, just push the plain word.
      showOnPage.push(reversedArray[j]);
    }
  }

  //Replaces the contents of the "result" div with the merged showOnPage array.
  document.getElementById('result').innerHTML = showOnPage.join(" ");
}
