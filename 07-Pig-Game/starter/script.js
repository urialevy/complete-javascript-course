'use strict';
// selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
var diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const scoreScreens = document.querySelectorAll('.current-score');
let result = 0;
let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;
// var player1 = document.querySelector('.player--0');
// var player2 = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//roll dice and updating display
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore; // TODO: CHANGE LATER FOR CURRENT PLAYER
  } else {
    currentScore = 0;
    current0El.textContent = currentScore; // TODO: CHANGE LATER FOR CURRENT PLAYER
  }
});
