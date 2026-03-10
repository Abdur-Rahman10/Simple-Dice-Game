'use strict';

// SELECTING ALL HTML ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const btnRules = document.querySelector('.btn--rules');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

let scores, currentScore, activePlayer, playing;

// INITIALIZATION FUNCTION
const init = function () {
  scores = [0, 0]; 
  currentScore = 0;
  activePlayer = 0; 
  playing = true; 

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); 
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  
  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';

  btnRules.classList.remove('hidden');
};

init();

// THE SWITCH PLAYER HELPER FUNCTION
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ROLLING THE DICE BUTTON
btnRoll.addEventListener('click', function () {
  if (playing) {
    btnRules.classList.add('hidden');

    const dice = Math.floor(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer(); 
    }
  }
});

// HOLD BUTTON
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false; 
      diceEl.classList.add('hidden');
      
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.getElementById(`name--${activePlayer}`).textContent = 'Winner! 🎉';

      // Bring the rules button back when someone wins
      btnRules.classList.remove('hidden');
    } else {
      switchPlayer();
    }
  }
});

// NEW GAME BUTTON
btnNew.addEventListener('click', init);

// MODAL LOGIC (HOW TO PLAY)
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnRules.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); 