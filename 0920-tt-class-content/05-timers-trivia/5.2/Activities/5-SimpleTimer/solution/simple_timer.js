/**
 * Simple Timer Solution
 **/

// Step 1:
// Use the following link inside the Audio function below: 
// https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90'
var audio = new Audio('raven.mp3');


// Step 2:
// Put your timeouts underneath this sentence.
setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);


// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
    // Once five seconds pass, send an alert and state the time remaining in the "time-left" div.
    $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
    alert('10 seconds left');
}

function tenSeconds() {
    // Once ten seconds pass, send an alert and state the time remaining in the "time-left" div.
    $('#time-left').html('<h2>About 5 Seconds Left!</h2>');
    alert('5 seconds left');
}

function timeUp(){
    // Once Fifteen seconds pass, time is up! 
    // Send an alert and have the "time-left" div let the user know.
    console.log('done');
    $('#time-left').html('<h2>Time\'s Up!</h2>');
    alert('time is up');

    // The following line will play the audio file you linked to above:
     audio.play();
}
