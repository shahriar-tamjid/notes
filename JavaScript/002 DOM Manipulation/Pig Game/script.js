'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
// There is another way to select IDs in JavaScript
const score1El = document.getElementById('score--1'); // notice the difference
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// starting conditions
let scores, currentScore, activePlayer, playing; // declaring necessary variables

const init = function () {
  // init means initialization
  // Set all scores to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Set player 1 as active player
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  // Setting internal conditions to initial state
  diceEl.classList.add('hidden');
  // reassigning all the variables to initial state
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ALWAYS MAKE FLOW CHARTS BEFORE SOLVING ANY PROBLEM. IT DIVIDES BIG PRONLEMS INTO SMALL PIECES.

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // By this we are dynamically loading image according to 'dice'.

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
      // toggle is method which adds elements if there aren't any and removes element if there is that particular method ... Ir's like making converting 0 to 1 and 1 to 0.
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add currentScore to activePlayer's score
    scores[activePlayer] += currentScore; // this means scores[0] = scores[0] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check activePlayer's score >= 100
    // if 'true' finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // else switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); // again in event handler never call the function () -> X
// Here we just type the name of the function and JS will call that function when the button is clicked.
