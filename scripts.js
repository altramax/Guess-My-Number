"use strict"

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const question = document.querySelector('.number');
question.textContent = secretNumber;

const guess = document.querySelector('.guess'); 
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const message = document.querySelector('.message');
// guess.textContent = "";


check.addEventListener('click', function(){
  if(!guess.value){
    message.textContent = "invalid input"
    score.textContent-- ;
  } else if (guess.value == secretNumber){
    message.textContent = "You win";
    if(score.textContent > highscore.textContent)
    {highscore.textContent = score.textContent} ;
    document.querySelector('.container').style('background-color: #60b347');
  } else if (guess.value != secretNumber) {
        if(guess.value > secretNumber && guess.value <= (secretNumber +5)){
            message.textContent = "You're Close, just a little lower";
            score.textContent-- ; 
        }else if(guess.value < secretNumber && guess.value >= (secretNumber - 5)){
        message.textContent = "You're Close, just a little higher";
        score.textContent-- ;
        }else if(guess.value > secretNumber){
            message.textContent = "too high";
            score.textContent-- ;
        }else{
            message.textContent = "too low";
            score.textContent-- ;
        }   
  } 

  if(score.textContent < 1){
    message.textContent = "you lost the game";
    score.textContent = '0';
  }
})

again.addEventListener('click', function(){
    score.textContent = "20";
    guess.value = "";
    message.textContent = "Start guessing...";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    question.textContent = secretNumber;
    document.querySelector('.container').style('background-color: #5968D9');
})



 

// {
//     if((guess.value + 5) < secretNumber){
//         message.textContent = "You're Close, just a little higher";
//         score.textContent-- ; 
//     } else {
//         message.textContent = "Too low";
//     }
// } else if ((guess.value + 10) > secretNumber){
//     if((guess.value + 5) > secretNumber){
//         message.textContent = "You're Close, just a little lower";
//         score.textContent-- ; 
//     } else {
//         message.textContent = "Too high";
//     }
// }



// guess.value > secretNumber ? message.textContent = 'too high':
//   message.textContent = 'too low';
//     score.textContent-- ;