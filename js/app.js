'use strict';

var welcome = alert('Hi there and welcome to my page.\n\nBefore we continue, let\'s take this short quiz to see how well you know me.');

function loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact) {
  var numOfQuestion = 1;
  var numOfCorrect = 0;
  while (guessCounter < guessNum ) {
    var userAnswer = prompt(`What do you know about me?\n\n Question ${numOfQuestion}: ${question}`);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      document.write(`<div class="${position}-container"><div class="${position}-float"><p class="questionAsked">${questionNum} question asked - <span class="question">${question}</span></p></div></div>`);
      document.write(`<div class="${position}-container"><div class="${position}-float"><p>You put "${userAnswer}" ... Survey says!  <span class="yes">Correct!</span>  My name is Jon!</p></div></div>`);
      document.write(`<div class="${position}-container-end"><div class="${position}-float"><p class="bonus">Bonus Fact:  ${bonusFact}</p></div></div>`);
      numOfCorrect++;
      console.log(`# of correct: ${numOfCorrect}`);
      break;
    } else {
      guessCounter++;
    }
  }
  guessCounter++;
  if (guessCounter > guessNum) {
    document.write(`<div class="${position}-container"><div class="${position}-float"><p class="questionAsked">${questionNum} question asked - <span class="question">${question}</span></p></div></div>`);
    document.write(`<div class="${position}-container-end"><div class="${position}-float"><p>You put "${userAnswer}" ... Survey says!  <span class="no">Incorrect!</span></p></div></div>`);
  }
}

function question1() {
  var questionNum = 'First'; // sets question number
  var question = 'What is my name?'; // my question
  var answer = 'jon'; // my answer
  var bonusFact = 'Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!'; // bonus fact
  var position = 'left'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question1();


function question2() {
  var questionNum = 'Second'; // sets question number
  var question = 'Do I like off-roading?'; // my question
  var answer = 'yes'; // my answer
  var bonusFact = 'Although I grew up in the country, I was never really interested in off-roading until my experiences in Japan and seeing how fantastic the culture and community really is.  Now I\'m all for it!'; // bonus fact
  var position = 'right'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question2();


function question3() {
  var questionNum = 'Third'; // sets question number
  var question = 'Am I in the Navy?'; // my question
  var answer = 'no'; // my answer
  var bonusFact = 'I served for 9 and a half years and I\'ve lived out of a suitcase for most of that time.  I\'ve traveled all over the East and Western coasts, Alaska, Hawaii, Guam, Korea and Japan.'; // bonus fact
  var position = 'left'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question3();


function question4() {
  var questionNum = 'Fourth'; // sets question number
  var question = 'Do I have a cat(s)?'; // my question
  var answer = 'yes'; // my answer
  var bonusFact = 'Tsuyu-chan, or Tsu for short, is the newest member to the family and she\'s a kitty.  Lola is a fat cat and she\'s 4 years old.  Extra bonus fact, Tsuyu in Japanese is means Rainy Season, so since we got Tsuyu-chan during this season, it seemed so fitting to name her that!'; // bonus fact
  var position = 'right'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question4();


function question5() {
  var questionNum = 'Fifth'; // sets question number
  var question = 'Do I own more than one vehicle?'; // my question
  var answer = 'yes'; // my answer
  var bonusFact = 'I purchased my car back in 2010 and it was the greatest thing ever.  I took fantastic care of her and she was in prestine condition.... until I left her with a friend while I went to Japan.  She needs a lot of work now but one day I\'ll fix her again!'; // bonus fact
  var position = 'left'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question5();


// function question5() {
//   var questionNum = 'Fifth'; // sets question number
//   var question = 'Do I own more than one vehicle?'; // my question
//   var answer = 'yes'; // my answer
//   var bonusFact = 'I purchased my car back in 2010 and it was the greatest thing ever.  I took fantastic care of her and she was in prestine condition.... until I left her with a friend while I went to Japan.  She needs a lot of work now but one day I\'ll fix her again!'; // bonus fact
//   var position = 'left'; // float position
//   var guessNum = 1; // # of attempts allowed
//   var guessCounter = 0; // # of guesses attempts
//   loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
// }
// question5();