let typingText = document.querySelector('.typing-text p');
let input = document.querySelector('.wrapper .input-field');
let time = document.querySelector('.time span b');
let mistakes = document.querySelector('.mistakes span');
let wpm = document.querySelector('.wpm span');
let cpm = document.querySelector('.cpm span');
let btn = document.querySelector('button');

// set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
      const paragraph = [
            
            "Martha came to the conclusion that shake weights are a great gift for any occasion",

           "He said he was not there yesterday however, many people saw him there",

            "He walked into the basement with the horror movie from the night before playing in his head",

            "Doris enjoyed tapping her nails on the table to annoy everyone",

            "I met an interesting turtle while the song on the radio blasted away",

            "The efficiency we have at removing trash has made creating trash more acceptable",

            "He decided to fake his disappearance to avoid jail",

            "Siri became confused when we reused to follow her directions",

            "Daisy said with a smile on her face Its often just the little", "things you do that can change a persons day for the better",
             "Daisy truly believed this to be the way the world worked", 
             "but she didnt understand that", 
             "she was merely a robot that had been programmed to believe this",

            "What was beyond the bend in the stream was unknown Both were", "curious but only one was brave enough to want to explore",
             "That was the problem There was always one that let fear rule her life"
      ]

      const randomIndex = Math.floor(Math.random()*paragraph.length);

      typingText.innerHTML = '';

      for(const char of paragraph[randomIndex]){
            typingText.innerHTML += `<span>${char}</span>`
      }

      typingText.querySelectorAll('span')[0].classList.add('active');
     
      document.addEventListener('keydown',()=>{
            input.focus();
      })
      typingText.addEventListener('click',()=>{
            input.focus()
      });
}


function initTyping(){

   const char = typingText.querySelectorAll('span');
   const typedChar = input.value.charAt(charIndex);

   if( charIndex < char.length  && timeLeft > 0){
      
            if(!isTyping){
                  timer = setInterval(initTime,1000);
                isTyping = true;
            }
            
            
      
      if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            
      }else{
            mistake++;
            char[charIndex].classList.add('incorrect');
            
            
      }

      char[charIndex].classList.remove('active');
      charIndex++;
      if (charIndex < char.length) {
            char[charIndex].classList.add('active');
        }
      mistakes.innerHTML = mistake;
      cpm.innerHTML = charIndex - mistake;

      // additional termination
      if(charIndex == char.length)
            clearInterval(timer);
   }
   else{
         clearInterval(timer);
         input.value = '';
   }

   

   
}

function initTime(){
      if(timeLeft>0){
            timeLeft--;
            time.innerText = timeLeft;
            const wpmval = Math.round(((charIndex - mistake)/5)/ (maxTime - timeLeft)*60);
            wpm.innerText = wpmval;
      }else{
            clearInterval(timer);
      }
      
}

input.addEventListener("input",initTyping);

function reset(){
      loadParagraph();
      clearInterval(timer);
      timeLeft = maxTime;
      input.value = '';
      charIndex = 0;
      mistake = 0;
      isTyping = false;
      wpm.innerHTML = '';
      cpm.innerHTML = '';
      mistakes.innerHTML = 0;
      time.innerHTML = timeLeft;

}

btn.addEventListener('click',reset);

loadParagraph();