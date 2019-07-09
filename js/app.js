'use strict';

var gameBegin = alert('Let\'s play a game called "What do you know about Jon?"\nPlease answer all questions with a \'Yes\' or \'No\' answer.');
var numOfCorrect = 0;

var myName = prompt('What do you know about Jon?\nQuestion 1:  Is my name.... Jon?');
if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'no') {
  if (myName.toLowerCase() === 'yes') {
    numOfCorrect++;
    document.write('First question asked - <a class="question">Is my name Jon?</a><br>');
    document.write('You put "'+myName+'" ... Survey says!  <a class="yes">Correct!</a>  My name is Jon!<br>');
    document.write('<a class="bonus">Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</a><br><br>');
  }
  if (myName.toLowerCase() === 'no') {
    document.write('First question asked - <a class="question">Is my name Jon?</a><br>');
    document.write('You put "'+myName+'" ... Survey says!  <a class="no">Incorrect!</a><br><br>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('First question asked - <a class="question">Is my name Jon?</a><br>');
  document.write('You put failed to input a valid answer!<br><br>');
}

var likesOffRoading = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 2:  Do I like off-roading?');
if (likesOffRoading.toLowerCase() === 'yes' || likesOffRoading.toLowerCase() === 'no') {
  if (likesOffRoading.toLowerCase() === 'yes') {
    numOfCorrect++;
    document.write('Second question asked - <a class="question">Do I like off-roading?</a><br>');
    document.write('You put "'+likesOffRoading+'" ... Survey says!  <a class="yes">Correct!</a>  I do like off-roading!<br>');
    document.write('<a class="bonus">Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</a><br><br>');
  }
  if (likesOffRoading.toLowerCase() === 'no') {
    document.write('Second question asked - <a class="question">Do I like off-roading?</a><br>');
    document.write('You put "'+likesOffRoading+'" ... Survey says!  <a class="no">Incorrect!</a><br><br>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('Second question asked - <a class="question">Do I like off-roading?</a><br>');
  document.write('You put failed to input a valid answer!<br><br>');
}

var isNavy = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 3:  Am I in the Navy?');
if (isNavy.toLowerCase() === 'yes' || isNavy.toLowerCase() === 'no') {
  if (isNavy.toLowerCase() === 'yes') {
    document.write('Third question asked - <a class="question">Am I in the Navy?</a><br>');
    document.write('You put "'+isNavy+'" .... Survey says!  <a class="no">Incorrect!</a>  I was in the Navy, but now I\'m no longer active duty!<br><br>');
  }
  if (isNavy.toLowerCase() === 'no') {
    numOfCorrect++;
    document.write('Third question asked - <a class="question">Am I in the Navy?</a><br>');
    document.write('You put "'+isNavy+'" ... Survey says!  <a class="yes">Correct!</a>  I used to be, but now I\'ve separated so I\'m no longer a part of the Navy! Yay me!<br><br>');
    document.write('<a class="bonus">Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</a><br><br>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('Third question asked - <a class="question">Am I in the Navy?</a><br>');
  document.write('You put failed to input a valid answer!<br><br>');
}

var hasCats = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 4:  Do I own any cats?');
if (hasCats.toLowerCase() === 'yes' || hasCats.toLowerCase() === 'no') {
  if (hasCats.toLowerCase() === 'yes') {
    numOfCorrect++;
    document.write('Fourth question asked - <a class="question">Do I own any cats?</a><br>');
    document.write('You put "'+hasCats+'" ... Survey says!  <a class="yes">Correct!</a>  I have two cats, Tsuyu-chan and Lola!<br>');
    document.write('<a class="bonus">Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</a><br><br>');
  }
  if (hasCats.toLowerCase() === 'no') {
    document.write('Fourth question asked - <a class="question">Do I own any cats?</a><br>');
    document.write('You put "'+hasCats+'" ... Survey says!  <a class="no">Incorrect!</a>  C\'mon.... You should have guessed that right, this is the cat class after all.<br><br>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('Fourth question asked - <a class="question">Do I own any cats?</a><br>');
  document.write('You put failed to input a valid answer!<br><br>');
}

var myCar = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 5:  Do you think I own another vehicle?');
if (myCar.toLowerCase() === 'yes' || myCar.toLowerCase() === 'no') {
  if (myCar.toLowerCase() === 'yes') {
    numOfCorrect++;
    document.write('Fifth question asked - <a class="question">Do you think I own another vehicle?</a><br>');
    document.write('You put "'+myCar+'" ... Survey says!  <a class="yes">Correct!</a>  My other car my real baby, she\'s a 2006 Mustang.<br>');
    document.write('<a class="bonus">Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</a><br><br>');
  }
  if (myCar.toLowerCase() === 'no') {
    document.write('Fifth question asked = <a class="question">Do you think I own another vehicle?</a><br>');
    document.write('You put "'+myCar+'" ... Survey says!  <a class="no">Incorrect!</a><br><br>');
  }
} else {
  document.write('Fifth question asked - <a class="question">Do you think I own another vehicle?</a><br>');
  document.write('You put failed to input a valid answer!<br><br>');
}

var gameEnd = function() {
  if (numOfCorrect < 1) {
    document.write('You scored '+numOfCorrect+' out of 4, perhaps you should try again!');
  }
  if (numOfCorrect <= 3 && numOfCorrect >= 1) {
    document.write('You scored '+numOfCorrect+' out of 4 but you could do better!  Fun fact, you get bonus facts for the ones you get wrong!');
  }
  if (numOfCorrect > 3) {
    document.write('Great job!  You scored '+numOfCorrect+' out of 4 correct!');
  }
  //document.write('Congratulations, you\'ve completed the my short quiz!  You scored '+numOfCorrect+ ' out of 4 correct!');
};

gameEnd();
