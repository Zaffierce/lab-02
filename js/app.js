'use strict';

var gameBegin = alert('Hi there and welcome to my page.  Before we continue, let\'s take this short quiz to see how well you know me."\n\nPlease answer all questions with a \'Yes\', \'Y\' or \'No\', \'N\' answer unless otherwise specified.');
var numOfQuestion = 1;
var numCorrect = 0;

var myName = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nIs my name.... Jon?');
if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'no' || myName.toLowerCase() === 'y' || myName.toLowerCase() === 'n') {
  if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y') {
    numOfQuestion++;
    numCorrect++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">First question asked - <a class="question">Is my name Jon?</a></p></div></div>');
    document.write('<div class="left-container"><div class="left-float"><p>You put "'+myName+'" ... Survey says!  <a class="yes">Correct!</a>  My name is Jon!</p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: Legally speaking though, my real name is Jonathan but only my mother calls me that if I\'m in trouble!</p></div></div>');
  }
  if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
    numOfQuestion++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">First question asked - <a class="question">Is my name Jon?</a></p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><p>You put "'+myName+'" ... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  numOfQuestion++;
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">First question asked - <a class="question">Is my name Jon?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var likesOffRoading = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nDo I like off-roading?');
if (likesOffRoading.toLowerCase() === 'yes' || likesOffRoading.toLowerCase() === 'no' || likesOffRoading.toLowerCase() === 'y' || likesOffRoading.toLowerCase() === 'n') {
  if (likesOffRoading.toLowerCase() === 'yes' || likesOffRoading.toLowerCase() === 'y') {
    numOfQuestion++;
    numCorrect++;
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Second question asked - <a class="question">Do I like off-roading?</a></p></div></div>');
    document.write('<div class="right-container"><div class="right-float"><p>You put "'+likesOffRoading+'" ... Survey says!  <a class="yes">Correct!</a>  I do like off-roading!</p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><br><p class="bonus">Bonus Fact: Although I grew up in the country, I was never really interested in off-roading until my experiences in Japan and seeing how fantastic the culture and community really is.  Now I\'m all for it!</p></div></div>');
  }
  if (likesOffRoading.toLowerCase() === 'no' || likesOffRoading.toLowerCase() === 'n') {
    numOfQuestion++;
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Second question asked - <a class="question">Do I like off-roading?</a></p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><p>You put "'+likesOffRoading+'" ... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
} else {
  numOfQuestion++;
  alert('You failed to enter yes or no for your response!');
  document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Second question asked - <a class="question">Do I like off-roading?</a></p></div></div>');
  document.write('<div class="right-container-end"><div class="right-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var isNavy = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nAm I in the Navy?');
if (isNavy.toLowerCase() === 'yes' || isNavy.toLowerCase() === 'no' || isNavy.toLowerCase() === 'y' || isNavy.toLowerCase() === 'n') {
  if (isNavy.toLowerCase() === 'yes' || isNavy.toLowerCase() === 'y') {
    numOfQuestion++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Third question asked - <a class="question">Am I in the Navy?</a></p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><p>You put "'+isNavy+'" .... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
  if (isNavy.toLowerCase() === 'no' || isNavy.toLowerCase() === 'n') {
    numOfQuestion++;
    numCorrect++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Third question asked - <a class="question">Am I in the Navy?</a></p></div></div>');
    document.write('<div class="left-container"><div class="left-float"><p>You put "'+isNavy+'" ... Survey says!  <a class="yes">Correct!</a>  I used to be, but now I\'ve separated so I\'m no longer a part of the Navy! Yay me!</p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: I served for 9 and a half years and I\'ve lived out of a suitcase for most of that time.  I\'ve traveled all over the East and Western coasts, Alaska, Hawaii, Guam, Korea and Japan.</p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  numOfQuestion++;
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Third question asked - <a class="question">Am I in the Navy?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var hasCats = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nDo I own any cats?');
if (hasCats.toLowerCase() === 'yes' || hasCats.toLowerCase() === 'no' || hasCats.toLowerCase() === 'y' || hasCats.toLowerCase() === 'n') {
  if (hasCats.toLowerCase() === 'yes' || hasCats.toLowerCase() === 'y') {
    numOfQuestion++;
    numCorrect++;
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Fourth question asked - <a class="question">Do I own any cats?</a></p></div></div>');
    document.write('<div class="right-container"><div class="right-float"><p>You put "'+hasCats+'" ... Survey says!  <a class="yes">Correct!</a>  I have two cats, Tsuyu-chan and Lola!</p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><br><p class="bonus">Bonus Fact: Tsuyu-chan, or Tsu for short, is the newest member to the family and she\'s a kitty.  Lola is a fat cat and she\'s 4 years old.  Extra bonus fact, Tsuyu in Japanese is means Rainy Season, so since we got Tsuyu-chan during this season, it seemed so fitting to name her that!</p></div></div>');
  }
  if (hasCats.toLowerCase() === 'no' || hasCats.toLowerCase() === 'n') {
    numOfQuestion++;
    document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Fourth question asked - <a class="question">Do I own any cats?</a></p></div></div>');
    document.write('<div class="right-container-end"><div class="right-float"><p>You put "'+hasCats+'" ... Survey says!  <a class="no">Incorrect!</a>  C\'mon.... You should have guessed that right, this is the cat class after all.</p></div></div>');
  }
} else {
  alert('You failed to enter yes or no for your response!');
  numOfQuestion++;
  document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Fourth question asked - <a class="question">Do I own any cats?</a></p></div></div>');
  document.write('<div class="right-container-end"><div class="right-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var myCar = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nDo you think I own another vehicle?');
if (myCar.toLowerCase() === 'yes' || myCar.toLowerCase() === 'no' || myCar.toLowerCase() === 'y' || myCar.toLowerCase() === 'n') {
  if (myCar.toLowerCase() === 'yes' || myCar.toLowerCase() === 'y') {
    numOfQuestion++;
    numCorrect++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Fifth question asked - <a class="question">Do you think I own another vehicle?</a></p></div></div>');
    document.write('<div class="left-container"><div class="left-float"><p>You put "'+myCar+'" ... Survey says!  <a class="yes">Correct!</a>  My other car\'s my real baby, she\'s a 2006 Mustang.</p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: I purchased my car back in 2010 and it was the greatest thing ever.  I took fantastic care of her and she was in prestine condition.... until I left her with a friend while I went to Japan.  She needs a lot of work now but one day I\'ll fix her again!</p></div></div>');
  }
  if (myCar.toLowerCase() === 'no' || myCar.toLowerCase() === 'n') {
    numOfQuestion++;
    document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Fifth question asked - <a class="question">Do you think I own another vehicle?</a></p></div></div>');
    document.write('<div class="left-container-end"><div class="left-float"><p>You put "'+myCar+'" ... Survey says!  <a class="no">Incorrect!</a></p></div></div>');
  }
} else {
  numOfQuestion++;
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Fifth question asked - <a class="question">Do you think I own another vehicle?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You put failed to input a valid answer!</p></div></div>');
}

var mySecretNumber = '4';
var secretNumberCount = 4;
var i = 0;
var hint = ' ';
var guessedNumbers = [];
while (i < secretNumberCount) {
  var guessNum = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nAttempt #' + (i+1) + ' of ' + secretNumberCount+ '\n\nCan you guess the number I\'m thinking of?\n'+hint);
  if (isNaN(guessNum) || !guessNum) {
    alert('Error:  Please use a number');
  } else {
    if (guessNum === mySecretNumber) {
      numOfQuestion++;
      numCorrect++;
      document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Sixth question asked - <a class="question">Can you guess the number I\'m thinking of?</a></p></div></div>');
      document.write('<div class="right-container"><div class="right-float"><p>You put "' +guessNum+ '" which was the <a class="yes">Correct!</a>  You also tried "' +guessedNumbers+'" but that weren\'t the magical number!</p></div></div>');
      document.write('<div class="right-container-end"><div class="right-float"><br><p class="bonus">Bonus Fact: In Japanese, 4 is a supersticious number since it can be pronounced as \'Shi\', which is also the same pronouncation as death.  It\'s so supersticious that it\'s actually common for buildings or hotels to not have a "4th" floor, but rather going from 3 to 5.</p></div></div>');
      break;
    } else {
      if (guessNum <= 1) {
        i++;
        hint = 'It\'s higher than '+guessNum+'!';
        guessedNumbers.push(guessNum);
      }
      if (guessNum >= 2 && guessNum <= 3) {
        i++;
        hint = 'Getting closer!';
        guessedNumbers.push(guessNum);
      }
      if (guessNum >= 5 && guessNum <= 9) {
        i++;
        hint = 'You\'re close, but too high!';
        guessedNumbers.push(guessNum);
      }
      if (guessNum >= 10) {
        i++;
        hint = 'It\'s lower than '+guessNum+'!';
        guessedNumbers.push(guessNum);
      }
    } 
    if (i === 4) {
      numOfQuestion++;
      document.write('<div class="right-container"><div class="right-float"><p class="questionAsked">Sixth question asked - <a class="question">Can you guess the number I\'m thinking of?</a></p></div></div>');
      document.write('<div class="right-container-end"><div class="right-float"><p>You tried "' +guessedNumbers+'"... Survey says!  <a class="no">Incorrect!</a>  Those guesses were not the number I was thinking of.</p></div></div>');
    }
  }
}

var favFoods = ['miso ramen', 'fried rice', 'karage chicken', 'sushi'];

var favFoodsTrue = false;
var i = 0;
var askNameCount = 6;
var guessedfavFoods = [];
while (i < askNameCount) {
  if (favFoodsTrue === true) {
    break;
  } else {
    var askFood = prompt('What do you know about me?  Question '+numOfQuestion+':\n\nAttempt #' + (i+1) +' of '+askNameCount+'\n\nCan you guess my favorite foods?\n(I\'ll give you a hint, it\'s all Japanese dishes)');
    for (var j = 0; j < askNameCount; j++) {
      if (favFoods[j] === askFood.toLowerCase()) {
        favFoodsTrue = true;
        //numOfQuestion++;
        numCorrect++;
        document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Seventh question asked - <a class="question">Can you guess my favorite foods?</a></p></div></div>');
        document.write('<div class="left-container"><div class="left-float"><p>You put "'+askFood+'" ... Survey says!  <a class="yes">Correct!</a>  That is one of my most favorite foods!</p></div></div>');
        document.write('<div class="left-container-end"><div class="left-float"><br><p class="bonus">Bonus Fact: My other favorite foods are '+favFoods+'!</p></div></div>');
      }
    }
    i++;
    console.log(i);
    guessedfavFoods.push(askFood);
  }
}
if (favFoodsTrue === false) {
  document.write('<div class="left-container"><div class="left-float"><p class="questionAsked">Seventh question asked - <a class="question">Can you guess my favorite foods?</a></p></div></div>');
  document.write('<div class="left-container-end"><div class="left-float"><p>You tried "' +guessedfavFoods+'"... Survey says!  <a class="no">Incorrect!</a>  Those guesses are not my favorite foods.</p></div></div>');
}

document.write('Congratulations, you\'ve compleleted my short quiz!  Out of '+numOfQuestion+' questions possible, you scored a ' +numCorrect+'.')
if (numCorrect === 7) {
  document.write('<br>Amazing Score!');
} else { 
  if (numCorrect <= 6 && numCorrect >=5) {
    document.write('<br>Close, you should try again to see if you can get all 7!');
  } 
  if (numCorrect <=4 && numCorrect >= 2) {
    document.write('<br>You scored pretty low.  I think you can do better.');
  }
  if (numCorrect < 1) {
    document.write('<br>You scored extremely low.  You should try again!');
  }
}
