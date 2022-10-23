'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameWon = false;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

//Cheat-Line
// document.querySelector('.number').textContent = secretNumber;

//Again button *************************************************************************
document.querySelector('.again').addEventListener('click', function () {
  console.log(`You clicked Again!`);
  if (gameWon === true) {
    // console.log(`gamestarted was read as true`);

    //resets game if game has already been started
    score = 20;
    displayScore(score);
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // //Cheat line for 'Again Button'
    document.querySelector('.number').textContent = secretNumber;
  } else {
    console.log(-1);
  }
});

//Check Button*************************************************************************
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('😭 No Number!');

    //When players wins
  } else if (guess === secretNumber) {
    gameWon = true;
    displayMessage('✨ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong **SIMPLIFIED**
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😢 Too high!' : '😭 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🤦‍♀️ You lost the game!');
      displayScore(0);
    }

    //when guess is too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '😢 Too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '🤦‍♀️ You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     //when guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '😭 Too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '🤦‍♀️ You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});
