'use strict';

var gameBegin = alert('Let\'s play a game called "What do you know about Jon?"\nPlease answer all questions with a \'Yes\', \'Y\' or \'No\', \'N\' answer.');
var numOfCorrect = 0;

var myName = prompt('What do you know about Jon?\nQuestion 1:  Is my name.... Jon?');
if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'no' || myName.toLowerCase() === 'y' || myName.toLowerCase() === 'n') {
  if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y') {
    numOfCorrect++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">First question asked - <a class="question">Is my name Jon?</a></p></div></div>');
    document.write('<div class="left-container"><div class="left-float"><p>You put "'+myName+'" ... Survey says!  <a class="yes">Correct!</a>  My name is Jon!</p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</p></div></div>');
  }
  if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">First question asked - <a class="question">Is my name Jon?</a></p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><p>You put "'+myName+'" ... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">First question asked - <a class="question">Is my name Jon?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var likesOffRoading = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 2:  Do I like off-roading?');
if (likesOffRoading.toLowerCase() === 'yes' || likesOffRoading.toLowerCase() === 'no' || likesOffRoading.toLowerCase() === 'y' || likesOffRoading.toLowerCase() === 'n') {
  if (likesOffRoading.toLowerCase() === 'yes' || likesOffRoading.toLowerCase() === 'y') {
    numOfCorrect++;
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Second question asked - <a class="question">Do I like off-roading?</a></p></div></div>');
    document.write('<div class="right-container"><div class="right-float"><p>You put "'+likesOffRoading+'" ... Survey says!  <a class="yes">Correct!</a>  I do like off-roading!</p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><br><p class="bonus">Bonus Fact: Although I grew up in the country, I was never really interested in off-roading until my experiences in Japan and seeing how fantastic the culture and community really is.  Now I\'m all for it!</p></div></div>');
  }
  if (likesOffRoading.toLowerCase() === 'no' || likesOffRoading.toLowerCase() === 'n') {
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Second question asked - <a class="question">Do I like off-roading?</a></p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><p>You put "'+likesOffRoading+'" ... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Second question asked - <a class="question">Do I like off-roading?</a></p></div></div>');
  document.write('<div class="right-container-end"><div class="right-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var isNavy = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 3:  Am I in the Navy?');
if (isNavy.toLowerCase() === 'yes' || isNavy.toLowerCase() === 'no' || isNavy.toLowerCase() === 'y' || isNavy.toLowerCase() === 'n') {
  if (isNavy.toLowerCase() === 'yes' || isNavy.toLowerCase() === 'y') {
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Third question asked - <a class="question">Am I in the Navy?</a></p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><p>You put "'+isNavy+'" .... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
  if (isNavy.toLowerCase() === 'no' || isNavy.toLowerCase() === 'n') {
    numOfCorrect++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Third question asked - <a class="question">Am I in the Navy?</a></p></div></div>');
    document.write('<div class="left-container"><div class="left-float"><p>You put "'+isNavy+'" ... Survey says!  <a class="yes">Correct!</a>  I used to be, but now I\'ve separated so I\'m no longer a part of the Navy! Yay me!</p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: I served for 9 and a half years and I\'ve lived out of a suitcase for most of that time.  I\'ve traveled all over the East and Western coasts, Alaska, Hawaii, Guam, Korea and Japan.</p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Third question asked - <a class="question">Am I in the Navy?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var hasCats = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 4:  Do I own any cats?');
if (hasCats.toLowerCase() === 'yes' || hasCats.toLowerCase() === 'no' || hasCats.toLowerCase() === 'y' || hasCats.toLowerCase() === 'n') {
  if (hasCats.toLowerCase() === 'yes' || hasCats.toLowerCase() === 'y') {
    numOfCorrect++;
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Fourth question asked - <a class="question">Do I own any cats?</a></p></div></div>');
    document.write('<div class="right-container"><div class="right-float"><p>You put "'+hasCats+'" ... Survey says!  <a class="yes">Correct!</a>  I have two cats, Tsuyu-chan and Lola!</p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><br><p class="bonus">Bonus Fact: Tsuyu-chan, or Tsu for short, is the newest member to the family and she\'s a kitty.  Lola is a fat cat and she\'s 4 years old.  Extra bonus fact, Tsuyu in Japanese is means Rainy Season, so since we got Tsuyu-chan during this season, it seemed so fitting to name her that!</p></div></div>');
  }
  if (hasCats.toLowerCase() === 'no' || hasCats.toLowerCase() === 'n') {
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Fourth question asked - <a class="question">Do I own any cats?</a></p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><p>You put "'+hasCats+'" ... Survey says!  <a class="no">Incorrect!</a>  C\'mon.... You should have guessed that right, this is the cat class after all.</p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Fourth question asked - <a class="question">Do I own any cats?</a></p></div></div>');
  document.write('<div class="right-container-end"><div class="right-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var myCar = prompt('What do you know about Jon?  # of correct: ' +numOfCorrect+'\nQuestion 5:  Do you think I own another vehicle?');
if (myCar.toLowerCase() === 'yes' || myCar.toLowerCase() === 'no' || myCar.toLowerCase() === 'y' || myCar.toLowerCase() === 'n') {
  if (myCar.toLowerCase() === 'yes' || myCar.toLowerCase() === 'y') {
    numOfCorrect++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Fifth question asked - <a class="question">Do you think I own another vehicle?</a></p></div></div>');
    document.write('<div class="left-container"><div class="left-float"><p>You put "'+myCar+'" ... Survey says!  <a class="yes">Correct!</a>  My other car\'s my real baby, she\'s a 2006 Mustang.</p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: I purchased my car back in 2010 and it was the greatest thing ever.  I took fantastic care of her and she was in prestine condition.... until I left her with a friend while I went to Japan.  She needs a lot of work now but one day I\'ll fix her again!</p></div></div>');
  }
  if (myCar.toLowerCase() === 'no' || myCar.toLowerCase() === 'n') {
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Fifth question asked - <a class="question">Do you think I own another vehicle?</a></p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><p>You put "'+myCar+'" ... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
} else {
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Fifth question asked - <a class="question">Do you think I own another vehicle?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var gameEnd = function() {
  if (numOfCorrect < 1) {
    document.write('<br><br>You scored '+numOfCorrect+' out of 5, perhaps you should try again!');
  }
  if (numOfCorrect <= 3 && numOfCorrect >= 1) {
    document.write('<br><br>You scored '+numOfCorrect+' out of 5 but you could do better!  Fun fact, you get bonus facts for the ones you get right!');
  }
  if (numOfCorrect === 4) {
    document.write('<br><br>Great job!  You scored '+numOfCorrect+' out of 5 correct!');
  }
  if (numOfCorrect === 5) {
    document.write('<br><br>Whoa, great job!  You got all 5 correct!  Are you stalking me....?');
  }
};

gameEnd();
