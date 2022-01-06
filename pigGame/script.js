'use strict';

// Selecting conditions.
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

// Starting conditions.
let currentScore, currentPlayer, scores, playing;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  //we did'n define the variable inside the btnRoll(line no.19...)because we went to save the value inside the variable and inside the function it will change it every time after onClick.
  currentScore = 0;
  currentPlayer = 0;
  scores = [0, 0];
  playing = true;

  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};
init();

// switching players
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};
console.log(currentPlayer, 'c');

// add the functionality to the dice, rooldice,
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generation the Random numbers.
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // Displaying the numbers.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled is 1:if true , Switch to next player.
    if (dice !== 1) {
      // if dice not one,add to current to current score.
      // currentScore=currentScore+dice
      // same as
      currentScore += dice;
      // console.log(currentScore);
      // currentEl0.textContent = currentScore;
      // console.log(currentEl0.textContent);

      // This is the current player;by dynamically
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    }
    // if true, switch to next player.
    else {
      // switching the players.
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // Adding current Scores to the current player.
    // scores[currentPlayer]=scores[currentPlayer]+currentScore;
    scores[currentPlayer] += currentScore;
    console.log(scores[currentPlayer]);
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    // If the player win the game if it's equal to greater then 100;
    if (scores[currentPlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    // console.log(currentPlayer, 'c');
  }
});
btnNew.addEventListener('click', init);
// document.getElementById(`current--${currentPlayer}`).textContent = 0;
// currentScore = 0;
// document
//   .querySelector(`.player--${currentPlayer}`)
//   .classList.remove('player--winner');
// document
//   .querySelector(`.player--${currentPlayer}`)
//   .classList.add('player--active');
// document.getElementById(`score--1`).textContent = 0;
// document.getElementById(`score--0`).textContent = 0;
// currentPlayer = 0;
// console.log(currentPlayer);
