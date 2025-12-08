var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

// Detect keypress to start the game
$(document).keypress(startGame);
$("#level-title").click(startGame);

function startGame() {
   if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
   }
}

function nextSequence() {
   userClickedPattern = [];
   level++;
   $("#level-title").text("Level " + level);

   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);

   $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
}

// Button click
$(".btn").click(function () {
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);

   playSound(userChosenColor);
   animatePress(userChosenColor);

   checkAnswer(userClickedPattern.length - 1);
});

// Check answer
function checkAnswer(currentIndex) {
   if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
      if (userClickedPattern.length === gamePattern.length) {
         setTimeout(function () {
            nextSequence();
         }, 1000);
      }
   } else {
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();

      $("body").addClass("game-over");
      setTimeout(function () {
         $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      startOver();
   }
}

// Restart game
function startOver() {
   level = 0;
   gamePattern = [];
   started = false;
}

function playSound(name) {
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}

function animatePress(currentColor) {
   $("#" + currentColor).addClass("pressed");
   setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
   }, 100);
}
