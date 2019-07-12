'use strict';

/*
    Current issues:  Q7 currently does not return an alert if the food they input is wrong,
                      it just continually loops through until it's hits the limit.
*/

var welcome = alert('Hi there and welcome to my page.\n\nBefore we continue, let\'s take this short quiz to see how well you know me.');

var numOfCorrect = 0; //Defines our number of correct answers, which is used within the ... function
var numOfQuestion = 1; //Defines our Question number which is used within the loop() function
function loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact) {
  var endLoop = false;

  while (guessCounter < guessNum && endLoop === false) {
    var userAnswer = prompt(`What do you know about me?\n\n Question ${numOfQuestion}: ${question}`);
    for (var i = 0; i < answer.length; i++) {
      if (userAnswer.toLowerCase() === answer[i]) {
        alert('You are correct!  Keep going with the quiz to get the rest of the story....');
        document.write(`<div class="${position}-container"><div class="${position}-float"><p class="questionAsked">${questionNum} question asked - <span class="question">${question}</span></p></div></div>`);
        document.write(`<div class="${position}-container"><div class="${position}-float"><p>You put "${userAnswer}" ... Survey says!  <span class="yes">Correct!</span>  My name is Jon!</p></div></div>`);
        document.write(`<div class="${position}-container-end"><div class="${position}-float"><p class="bonus">Bonus Fact:  ${bonusFact}</p></div></div>`);
        numOfCorrect++; //Adds to correct points
        numOfQuestion++; // Adds to question # if true
        console.log(`Q# loop : ${numOfQuestion}`);
        endLoop = true;
        break;
      }
      guessCounter++; // Adds to guessCounter
    }
  }
  if (guessCounter > guessNum) { //If our guessCounter (set above) is higher than guessNum (the limit of guesses allowed) then run this code
    endLoop = true;
    numOfQuestion++; // Adds to the question # if failed
    alert('You are incorrect!  But keep going with the quiz to get the rest of the story....');
    document.write(`<div class="${position}-container"><div class="${position}-float"><p class="questionAsked">${questionNum} question asked - <span class="question">${question}</span></p></div></div>`);
    document.write(`<div class="${position}-container-end"><div class="${position}-float"><p>You put "${userAnswer}" ... Survey says!  <span class="no">Incorrect!</span></p></div></div>`);
  }
}

function question1() {
  var questionNum = 'First'; // sets question number
  var question = 'What is my name?'; // my question
  var answer = ['jon', 'hey you'];
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
  var answer = ['yes', 'y'];
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
  var answer = ['no', 'n'];
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
  var answer = ['yes', 'y'];
  var bonusFact = 'I have two!  Tsuyu-chan, or Tsu for short, is the newest member to the family and she\'s a kitty.  Lola is a fat cat and she\'s 4 years old.  Extra bonus fact, Tsuyu in Japanese is means Rainy Season, so since we got Tsuyu-chan during this season, it seemed so fitting to name her that!'; // bonus fact
  var position = 'right'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question4();


function question5() {
  var questionNum = 'Fifth'; // sets question number
  var question = 'Do I own more than one vehicle?'; // my question
  var answer = ['yes', 'y'];
  var bonusFact = 'I purchased my car back in 2010 and it was the greatest thing ever.  I took fantastic care of her and she was in prestine condition.... until I left her with a friend while I went to Japan.  She needs a lot of work now but one day I\'ll fix her again!'; // bonus fact
  var position = 'left'; // float position
  var guessNum = 1; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question5();




function loopNumber(guessCounter, guessNum, question, answer, position, questionNum, bonusFact, hintTooLow, hintClose, hintTooHigh) {
  var endLoop = false;
  var hint = 'It\'s a number between 1 and 10'; //default hint for prompt
  var guessedNumbers = []; //empty array to store the numbers the user has guessed

  while (guessCounter < guessNum && endLoop === false) {
    var userAnswer = prompt(`What do you know about me?\n\n Question ${numOfQuestion}: ${question}\nHint:  ${hint}`);
    if (isNaN(userAnswer) || !userAnswer) {
      alert('Error:  Please use a number!');
    } else {
      for (var i = 0; i < answer.length; i++) {
        if (userAnswer === answer[i]) {
          alert('You are correct!  Keep going with the quiz to get the rest of the story....');
          document.write(`<div class="${position}-container"><div class="${position}-float"><p class="questionAsked">${questionNum} question asked - <span class="question">${question}</span></p></div></div>`);
          document.write(`<div class="${position}-container"><div class="${position}-float"><p>You put "${userAnswer}" ... Survey says!  <span class="yes">Correct!</span>  My name is Jon!</p></div></div>`);
          document.write(`<div class="${position}-container-end"><div class="${position}-float"><p class="bonus">Bonus Fact:  ${bonusFact}</p></div></div>`);
          numOfCorrect++;
          numOfQuestion++;
          endLoop = true;
          break;
        } else {
          if (userAnswer <= 1) {
            i++;
            hint = hintTooLow;
            guessedNumbers.push(userAnswer);
          }
          if (userAnswer >= 2 && userAnswer <= 3) {
            i++;
            hint = hintClose;
            guessedNumbers.push(userAnswer);
          }
          if (userAnswer >= 5 && userAnswer <= 9) {
            i++;
            hint = hintTooHigh;
            guessedNumbers.push(userAnswer);
          }
          if (userAnswer >= 10) {
            i++;
            guessedNumbers.push(userAnswer);
            guessedNumbers.push(userAnswer);
          }
        }
        guessCounter++;
      }
    }
  }
  guessCounter++;
  if (guessCounter > guessNum) {
    endLoop = true;
    numOfQuestion++;
    alert('You are incorrect!  But keep going with the quiz to get the rest of the story....');
    document.write(`<div class="${position}-container"><div class="${position}-float"><p class="questionAsked">${questionNum} question asked - <span class="question">${question}</span></p></div></div>`);
    document.write(`<div class="${position}-container-end"><div class="${position}-float"><p>You put "${guessedNumbers}" ... Survey says!  <span class="no">Incorrect!</span></p></div></div>`);
  }
}


function question6() {
  var questionNum = 'Sixth'; // sets question number
  var question = 'What\'s the number I\'m thinking of?'; // my question
  var answer = '4'; // my answer
  var bonusFact = 'In Japan, 4 is a supersticious number since it can be pronounced as \'Shi\', which is also the same pronouncation as death.  It\'s so supersticious that it\'s actually common for buildings or hotels to not have a "4th" floor, but rather go from 3 to 5.'; // bonus fact
  var hintTooLow = 'It\'s higher than that!';
  var hintClose = 'You\'re close!';
  var hintTooHigh = 'It\'s lower than that';
  var position = 'right'; // float position
  var guessNum = 4; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loopNumber(guessCounter, guessNum, question, answer, position, questionNum, bonusFact, hintTooLow, hintClose, hintTooHigh);
}
question6();


function question7() {
  var questionNum = 'Seven'; // sets question number
  var question = 'Can you guess my favorite food?  Hint:  Think of Japanese dishes'; // my question
  var answer = ['miso ramen', 'fried rice', 'karage chicken', 'sushi'];
  var bonusFact = `My other favorite foods are ${answer}!`; // bonus fact
  var position = 'left'; // float position
  var guessNum = 6; // # of attempts allowed
  var guessCounter = 0; // # of guesses attempts
  loop(guessCounter, guessNum, question, answer, position, questionNum, bonusFact);
}
question7();


}
finished();
