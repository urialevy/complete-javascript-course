'use strict';
// selecting elements
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
var diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const scoreScreens = document.querySelectorAll('.current-score');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let activePlayer = player0;
let result = 0;
let currentScore = 0;
let score0El = 0;
let score1El = 1;
score0.textContent = 0;
score1.textContent = 0;

//roll dice and updating display
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    if (activePlayer == player0) {
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  } else {
    currentScore = 0;
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    changeActivePlayer();
  }
});

// hold button

btnHold.addEventListener('click', function () {
  if (activePlayer == player0) {
    score0El += currentScore;
    score0.textContent = score0El;
    currentScore = 0;
    current0El.textContent = currentScore;
    changeActivePlayer();
  } else {
    score1El += currentScore;
    score1.textContent = score1El;
    currentScore = 0;
    current1El.textContent = currentScore;
    changeActivePlayer();
  }
});

// toggles active player
function changeActivePlayer() {
  if (activePlayer == player0) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer = player1;
  } else {
    activePlayer = player0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
}
