'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0EL.textContent = 0;
score1EL.textContent = 0;
// diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0EL.textContent = currentScore;
    }else {
        // 次のプレイヤーに交代(プレイヤー０であるかどうかチェック)
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // スコアを一旦０に戻す
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
    }
});
// document.querySelector('#current--0').textContent = dice;