'use strict';

//Event listner
let secretNumber = Math.trunc(Math.random() * 200) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //eventlistner to make a button work first add selector then the class or id then specify the event listner and then specify the event i.e click and create a function for the click or the action to be taken after the click

  console.log(guess, typeof guess);
  // no input
  if (!guess) {
    displayMessage('no number found');

    // Guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    displayMessage('Correct Number!');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess is wrong
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Two low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You loose!');
  }
});

// Restarting the again from inital condition

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//          EXTRA NOTES FOR REFRENCE                  //
// document.querySelector is to acess the html document
//.classname and #id in brackets and qoutations mark
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // input fields are defined by values
*/
