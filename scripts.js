"use strict"
// secreat number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Global Variables
let question = document.querySelector('.number');
let guess = document.querySelector('.guess');
let again = document.querySelector('.again');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let container = document.querySelector('.container');

// Initial states
let score = document.querySelector('.score');
document.querySelector('.score').textContent = 20;
let highscore = document.querySelector('.highscore');
document.querySelector('.highscore').textContent = 0;

// Checking Function
check.addEventListener('click', function(){
  if(!guess.value){
    message.textContent = "๐คจ invalid input ๐ซ"   
    guess.value = "";
  } else if (guess.value == secretNumber){
    message.textContent = "๐๐๐๐ You win !!!";
    if(score.textContent > highscore.textContent)
    {highscore.textContent = score.textContent} ;
    container.style.backgroundColor = '#60b347';
    question.style.width = '20%';
    question.style.padding = '2rem';
    question.textContent = secretNumber;
    guess.value = "";
    check.classList.add('hidden');

  } else if (guess.value != secretNumber) {
    if(guess.value < 1 || guess.value > 20){
        message.textContent = "๐คจ invalid input ๐ซ"
        guess.value = "";
      }else if(guess.value > secretNumber && guess.value <= (secretNumber +5)){
        message.textContent = "๐ You're Close, just a little lower";
        score.textContent-- ; 
        guess.value = "";
        }else if(guess.value < secretNumber && guess.value >= (secretNumber - 5)){
        message.textContent = "๐ You're Close, just a little higher";
        score.textContent-- ;
        guess.value = "";
        }else if(guess.value > secretNumber){
        message.textContent = "๐ฑ Too high!";
        score.textContent-- ;
        guess.value = "";
        }else{
        message.textContent = "๐ฑ Too low!";
        score.textContent-- ;
        guess.value = "";
        }   
  }  

  if(score.textContent < 1){
    message.textContent = "๐ญ๐ญ Sorry Game Over";
    score.textContent = '0';
    guess.value = "";
  }
})

// Restart Function
again.addEventListener('click', function(){
  score.textContent = "20";
  guess.value = "";
  message.textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  question.textContent = "?";
  container.style.backgroundColor = '#5968D9';
  question.style.width = '10%';
  check.classList.remove('hidden');
})
