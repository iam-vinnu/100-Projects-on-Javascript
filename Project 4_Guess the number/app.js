
let random = parseInt(Math.random()*100 + 1);
console.log(random);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('#prevGuess');
const remain = document.querySelector('#remain');
const result = document.querySelector('#result');
const resulField = document.querySelector('.resultField')
const p = document.createElement('p');


let prevGuessArr = [];
const playGame = true;
let remaning = 1;

if(playGame){
    submit.addEventListener('click' , (event)=>{
            event.preventDefault();
            const guessValue = parseInt(userInput.value) ;
            validate(guessValue);

    })
}

const validate =(guess)=>{
    if(isNaN(guess)){
     displayMessage('This Is Not A Number');
    }else if(guess>100){
     displayMessage('Please Enter Number Smaller Then 100');
    }else if(guess <= 0){
     displayMessage('Please Enter Number Bigger Than 0')
    }else{
         
          prevGuessArr.push(guess);
       
         if(remaning === 10){
            displayResult(guess);
            displayMessage(`Game Over The Correct Number is ${random}`);
            endGame();
         }else{
            checkGuess(guess);
            displayResult(guess);
         }
    }
}
const checkGuess =(guess)=>{
      if(random === guess){
         displayMessage('You Guessed It Right');
         endGame();
      }else if(random < guess){
         displayMessage('You Guessed Too Big Number')
      }else{
        displayMessage('You Guessed Too Small Number')
      }
}
const displayResult =(guess)=>{
        userInput.value = " "
        prevGuess.textContent += `${guess}, `
        remaning++
        remain.textContent = `${11 - remaning}`
        
}
const displayMessage = (message)=>{
      result.textContent = message;
}
const resetGame=()=>{

}
const endGame = ()=>{
       userInput.value = " "
       submit.setAttribute('disabled','');
       p.setAttribute('id','new');
       p.style.cursor = 'pointer';
       p.textContent= "Click To Start Again"
       resulField.appendChild(p);
       startGame(p);
}
const startGame = (p)=>{
      p.addEventListener('click',(e)=>{
 //             prevGuess = [];
              location.reload();
      })
}