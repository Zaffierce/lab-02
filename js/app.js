'use strict';

var gameBegin = alert('Let\'s play a game called "What do you know about Jon?"\nPlease answer all questions with a True or False answer.');
var numOfCorrect = 0;

var myName = prompt('What do you know about Jon?\nQuestion 1:  Is my name.... Jon?');
if (myName.toLowerCase() === 'true' || myName.toLowerCase() === 'false') {
  if (myName.toLowerCase() === 'true') {
    numOfCorrect++;
    document.write('You put "True" ... Survey says!  Correct!  My name is Jon!');
  }
  if (myName.toLowerCase() === 'false') {
    document.write('You put "False" ... Survey says!  Incorrect!');
  }
} else {
  alert('You failed to enter true or false for your response!');
}

var likesOffRoading = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 2: Do I like off-roading?');
if (likesOffRoading.toLowerCase() === 'true' || likesOffRoading.toLowerCase() === 'false') {
  if (likesOffRoading.toLowerCase() === 'true') {
    numOfCorrect++;
    document.write('You put "True" ... Survey says!  Correct!  I do like off-roading!');
  }
  if (likesOffRoading.toLowerCase() === 'false') {
    document.write('You put "False" ... Survey says!  Incorrect!');
  }
} else {
  alert('You failed to enter true or false for your response!');
}

var isNavy = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 3:  Am I in the Navy?');
if (isNavy.toLowerCase() === 'true' || isNavy.toLowerCase() === 'false') {
  if (isNavy.toLowerCase() === 'true') {
    document.write('You put "False" .... Survey says!  Incorrect!  I <em>was</em> in the Navy, but now I\'m no longer active duty!');
  }
  if (isNavy.toLowerCase() === 'false') {
    numOfCorrect++;
    document.write('You put "False" ... Survey says!  Correct!  I used to be, but now I\'ve separated so I\'m no longer a part of the Navy! Yay me!');
  }
} else {
  alert('You failed to enter true or false for your response!');
}

var hasCats = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 4:  Do I own any cats?');
if (hasCats.toLowerCase() === 'true' || hasCats.toLowerCase() === 'false') {
  if (hasCats.toLowerCase() === 'true') {
    numOfCorrect++;
    document.write('You put "True" ... Survey says!  Correct!  I have two cats, Tsuyu-chan and Lola!');
  }
  if (hasCats.toLowerCase() === 'false') {
    document.write('You put "False" ... Survey says!  Incorrect!  C\'mon.... You should have guessed that right, this is the cat class after all.' );
  }
} else {
  alert('You failed to enter true or false for your response!')
}

