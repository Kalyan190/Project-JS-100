let hrDots = document.getElementById('hrDots');
let minDots = document.getElementById('minDots');
let secDots = document.getElementById('secDots');


function clock(){
      var date = new Date();
      var hours = date.getHours() % 12 ; // convert 12 hours format
      var AmPm = date.getHours() >= 12 ? 'PM' : 'AM';

      hours = hours === 0 ? 12 : hours;

     var minutes = date.getMinutes();
     var seconds = date.getSeconds();

     // rotation
     var secondsDots = '';
     for(var i = 1; i<61; i++){
      var rotation = i*6;

      if(i === seconds){
            secondsDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
      }else{
            secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
      }
     }

     var minutesDots = '';
     for(var i = 1; i<61; i++){
      var rotation = i*6;

      if(i === minutes){
            minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
      }else{
            minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
      }
     }

     var hoursDots = '';
     for(var i = 1; i<13; i++){
      var rotation = i*30;

      if(i === hours){
           hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
      }else{
            hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
      }
     }

     secDots.innerHTML = secondsDots+'<b>' + AmPm + '</b>' + '<h2>' + Zero(seconds) + '<br><span>Seconds</span></h2>';
     minDots.innerHTML = minutesDots+'<h2>' + Zero(minutes) + '<br><span>Minutes</span></h2>';
     hrDots.innerHTML = hoursDots+'<h2>' + Zero(hours) + '<br><span>Hours</span></h2>';
}

function Zero(Number){
      if(Number < 10){
            return '0' + Number;
      }
      return Number;
}

setInterval(clock,1000);


