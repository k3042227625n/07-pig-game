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

let scores, currentScore, activePlayer, playing;

const init = function() {
    
    // 両playerの得点を配列に格納
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0EL.textContent = 0;
    score1EL.textContet = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    diceEL.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();


const switchPlayer = function() {
    // currentScoreを0にリセット
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        // activePlayerが0であれば1に変更、そうでなければ0に変更
        // === 条件 ? 真 : 偽
        activePlayer = activePlayer === 0 ? 1 : 0;
        // classがなければ追加し、あれば削除
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if(playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        diceEL.classList.remove('hidden');
        // サイコロの目を表示
        diceEL.src = `dice-${dice}.png`;
        
        // 1でなければ現在のスコアにサイコロを足す
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0EL.textContent = currentScore;
        }else {
            // 次のプレイヤーに交代(activePlayerを0から1に変更)
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if(playing) {

        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentscore

        // Holdボタンを押したら合計値が表示
        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];

        if (scores[activePlayer] >= 20) {

            playing = false;
            diceEL.classList.add('hidden');


            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }

});

btnNew.addEventListener('click', init);
