const startBtn = document.getElementsByClassName('start')[0];
const stopBtn = document.getElementsByClassName('stop')[0];

const logDiv = document.getElementsByClassName('show')[0];
const stateDiv = document.getElementsByClassName('shows')[0];

startBtn.addEventListener("click",()=>{
      document.addEventListener('keydown',handleDown);
      document.addEventListener('keyup',handleUp);
      startBtn.disabled = true;
      stopBtn.disabled = false;

})


stopBtn.addEventListener('click',()=>{
      document.removeEventListener('keydown',handleDown);
      document.removeEventListener('keyup',handleUp);

      logDiv.textContent = "";
      stateDiv.textContent = "";
      startBtn.disabled = false;
      stopBtn.disabled = true;
})

function handleDown(e){
      logDiv.textContent = `Key ${e.key} pressed down`;
      stateDiv.textContent = `Key is down`;
}

function handleUp(e){
      logDiv.textContent = `Key ${e.key} pressed Up`;
      stateDiv.textContent = `Key is Up`;
}

