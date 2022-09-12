'use strict';
var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = Number(document.querySelector('.score').textContent);
var highScore = document.querySelector('.highscore');
var num = document.querySelector('.number');
var message = document.querySelector('.message');
// document.querySelector('.number').textContent = secretNumber;

const guessing = document
  .querySelector('.check')
  .addEventListener('click', function () {
    var guess = Number(document.querySelector('.guess').value);
    if (guess !== secretNumber) {
      message.textContent =
        guess > secretNumber ? 'Too high! Go lower' : 'Too low! Go higher';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess == secretNumber) {
      document.querySelector('body').style.backgroundColor = 'green';
      num.style.width = '30rem';
      message.textContent = score == 20 ? 'FLAWLESS VICTORY' : '🎉 You win!';
      num.textContent = secretNumber;
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      if (score > highScore || highScore == 0) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.check').disabled = true;
    }
    if (!guess) {
      message.textContent = '🚫 No number input detected! ';
    }
    if (score < 1) {
      num.style.width = '30rem';
      document.querySelector('body').style.backgroundColor = 'red';
      message.textContent = 'GAME OVER';
      document.querySelector('.check').disabled = true;
      document.querySelector('.number').textContent = secretNumber;
    }
  });
document.querySelector('.again').addEventListener('click', reset => {
  if (highScore == 20 || score == 0) {
    highScore = 0;
    document.querySelector('.highscore').textContent = highScore;
  }
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').value = '0';
  num.textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  num.style.width = '15rem';
});
