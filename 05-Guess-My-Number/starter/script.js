'use strict';
var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = Number(document.querySelector('.score').textContent);
var highScore = document.querySelector('.highscore');
// document.querySelector('.number').textContent = secretNumber;

const guessing = document
  .querySelector('.check')
  .addEventListener('click', function () {
    var guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');

    if (guess < secretNumber) {
      message.textContent = 'Too low! Go higher ';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess > secretNumber) {
      message.textContent = 'Too high! Go lower  ';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess == secretNumber) {
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score == 20) {
        message.textContent = 'FLAWLESS VICTORY';
      } else {
        message.textContent = '🎉 You win!';
      }
      document.querySelector('.number').textContent = secretNumber;
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      if (score > highScore || highScore == 0) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.check').disabled = true;
    }
    if (!guess) {
      document.querySelector('.message').textContent =
        'No number input detected! 🚫';
    }
    if (score == 0) {
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = 'GAME OVER';
      document.querySelector('.check').disabled = true;
      document.querySelector('.number').textContent = secretNumber;
    }
  });
document.querySelector('.again').addEventListener('click', reset => {
  if (highScore == 20 || score == 0) {
    highScore = 0;
    document.querySelector('.highscore').textContent = highScore;
  }
  score = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').value = '0';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
