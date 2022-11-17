"use strict"

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let question = document.querySelector('.number');
let guess = document.querySelector('.guess');
let again = document.querySelector('.again');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let container = document.querySelector('.container');

let score = document.querySelector('.score');
document.querySelector('.score').textContent = 20;
let highscore = document.querySelector('.highscore');
document.querySelector('.highscore').textContent = 0;

check.addEventListener('click', function(){
  if(!guess.value){
    message.textContent = "🤨 invalid input 🚫"   
    guess.value = "";
  } else if (guess.value == secretNumber){
    message.textContent = "🎉🎊😁😁 You win !!!";
    if(score.textContent > highscore.textContent)
    {highscore.textContent = score.textContent} ;
    container.style.backgroundColor = '#60b347';
    question.style.width = '20%';
    question.style.padding = '2rem';
    question.textContent = secretNumber;
    guess.value = "";
  } else if (guess.value != secretNumber) {

    if(guess.value < 1 || guess.value > 20){
        message.textContent = "🤨 invalid input 🚫"
        guess.value = "";
      }else if(guess.value > secretNumber && guess.value <= (secretNumber +5)){
        message.textContent = "😉 You're Close, just a little lower";
        score.textContent-- ; 
        guess.value = "";
        }else if(guess.value < secretNumber && guess.value >= (secretNumber - 5)){
        message.textContent = "😉 You're Close, just a little higher";
        score.textContent-- ;
        guess.value = "";
        }else if(guess.value > secretNumber){
        message.textContent = "😱 Too high!";
        score.textContent-- ;
        guess.value = "";
        }else{
        message.textContent = "😱 Too low!";
        score.textContent-- ;
        guess.value = "";
        }   
  }  

  if(score.textContent < 1){
    message.textContent = "😭😭 Sorry Game Over";
    score.textContent = '0';
    guess.value = "";
  }
})

again.addEventListener('click', function(){
    score.textContent = "20";
    guess.value = "";
    message.textContent = "Start guessing...";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    question.textContent = "?";
    container.style.backgroundColor = '#5968D9';
    question.style.width = '10%';
})
