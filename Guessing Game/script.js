let input = document.getElementById('input');
let submit = document.getElementById('submit');

let wrong = document.querySelector('.wrong');
let guess = document.getElementById('guess');

let random = Math.floor(Math.random()*100)+1;

let guessNumber = 0;

submit.addEventListener('click',()=>{NumberGuess();})
input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          NumberGuess();
      }
  });

function NumberGuess(){
      if(input.value < 1 || input.value > 100 || isNaN(input.value)){
            wrong.innerHTML = "Enter between 1 to 100";
      }else{
            guessNumber++;
            guess.innerHTML = "No. of Guess: "+ guessNumber;

            if(input.value > random){
                  wrong.innerHTML = "You guessed too High";
                  input.value = "";
            }else if(input.value < random){
                  wrong.innerHTML = "You guessed too Low!";
                  input.value = "";
            }else{
                  wrong.innerHTML = "Congratulation You guessed to correct number";
                  submit.disabled = true;
                  setTimeout(()=>{
                        resetGame();
                  },5000);

            }
      }
}

function resetGame(){
      guessNumber = 0;
      random = Math.floor(Math.random()*100)+1;
      input.value="";
      wrong.innerHTML = "";
      submit.disabled = false;
      guess.innerHTML = "No. of guess: 0";
}