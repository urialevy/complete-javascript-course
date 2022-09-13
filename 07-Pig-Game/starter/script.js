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
let currentScore = 0;
let score0El = 0;
let score1El = 0;
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
      if (currentScore + score0El > 99) {
        victory();
      }
    } else {
      current1El.textContent = currentScore;
      if (currentScore + score1El > 99) {
        victory();
      }
    }
  } else {
    currentScore = 0;
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    changeActivePlayer();
  }
});

// hold button - end game if total score > 99
btnHold.addEventListener('click', holdNum);

function holdNum() {
  if (activePlayer == player0) {
    score0El += currentScore;
    score0.textContent = score0El;
    currentScore = 0;
    current0El.textContent = currentScore;
    if (score0El > 99) {
      victory();
    } else {
      changeActivePlayer();
    }
  } else {
    score1El += currentScore;
    score1.textContent = score1El;
    currentScore = 0;
    current1El.textContent = currentScore;
    if (score1El > 99) {
      victory();
    } else {
      changeActivePlayer();
    }
  }
}

function victory() {
  if (activePlayer == player0) {
    document.querySelector('#name--0').textContent = 'WINNER';
    btnRoll.disabled = true;
  } else {
    document.querySelector('#name--1').textContent = 'WINNER';
    btnRoll.disabled = true;
  }
}

// New game button
btnNew.addEventListener('click', function () {
  activePlayer = player1;
  changeActivePlayer();
  currentScore = 0;
  score1.textContent = 0;
  score0.textContent = 0;
  score0El = 0;
  score1El = 0;
  btnRoll.disabled = false;
  document.querySelector('#name--0').textContent = 'PLAYER 1';
  document.querySelector('#name--1').textContent = 'PLAYER 2';
  diceImg.classList.add('hidden');
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
});

// toggles active player
function changeActivePlayer() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  if (activePlayer == player0) {
    activePlayer = player1;
  } else {
    activePlayer = player0;
  }
}
