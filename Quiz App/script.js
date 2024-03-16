const questions = [
      {
            question: "Who is the father of C language?",
            answers: [
                  {text: "Steve Jobs",correct: false},
                  {text: "James Gosling",correct: false},
                  {text: "Dennis Ritchie",correct: true},
                  {text: "Rasmus Lerdorf",correct: false},
            ]
      },
      {
            question: "Which of the following is not a valid C variable name?",
            answers: [
                  {text: "int number;",correct: false},
                  {text: "float rate;",correct: false},
                  {text: "int variable_count;",correct: false},
                  {text: "int $main;",correct: true},
            ]
      },
      {
            question: "All keywords in C are in ____________",
            answers: [
                  {text: "LowerCase letters",correct: true},
                  {text: "UpperCase letters",correct: false},
                  {text: "CamelCase letters",correct: false},
                  {text: "None of the mentioned",correct: false},
            ]
      },
      {
            question: "Which of the following is true for variable names in C?",
            answers: [
                  {text: "They can contain alphanumeric characters as well as special characters",correct: false},
                  {text: " It is not an error to declare a variable to be one of the keywords(like goto, static)",correct: false},
                  {text: "Variable names cannot start with a digit",correct: true},
                  {text: "Variable can be of any length",correct: false},
            ]
      },
      {
            question: "Which is valid C expression?",
            answers: [
                  {text: "int my_num = 100,000;",correct: false},
                  {text: "int my_num = 100000;",correct: true},
                  {text: "int my num = 1000;",correct: false},
                  {text: "int $my_num = 10000;",correct: false},
            ]
      },
      {
            question: "Which of the following cannot be a variable name in C?",
            answers: [
                  {text: "volatile",correct: true},
                  {text: "true",correct: false},
                  {text: "friend",correct: false},
                  {text: "export",correct: false},
            ]
      },
      {
            question: "What is short int in C programming?",
            answers: [
                  {text: "The basic data type of C",correct: false},
                  {text: "Qualifier",correct: false},
                  {text: "Short is the qualifier and int is the basic data type",correct: true},
                  {text: "All of the mentioned",correct: false},
            ]
      },
      {
            question: "Which of the following declaration is not supported by C language?",
            answers: [
                  {text: "String str;",correct: true},
                  {text: "char *str;",correct: false},
                  {text: "float str = 3e2;",correct: false},
                  {text: "Both “String str;” and “float str = 3e2;”",correct: false},
            ]
      },
      {
            question: "Which keyword is used to prevent any changes in the variable within a C program?",
            answers: [
                  {text: "immutable",correct: false},
                  {text: "mutable",correct: false},
                  {text: "const",correct: true},
                  {text: "volatile",correct: false},
            ]
      },
      {
            question: " Where in C the order of precedence of operators do not exist?",
            answers: [
                  {text: "Within conditional statements, if, else",correct: false},
                  {text: "Within while, do-while",correct: false},
                  {text: "Within a macro definition",correct: false},
                  {text: "None of the mentioned",correct: true},
            ]
      },
];

const questionElement = document.getElementById("question");

const answer_button = document.getElementById("answer-button");

const nextButton = document.getElementById("next-btn");
const Score = document.getElementById("Score");

let currentquestionIndex = 0;
let score = 0;

function startQuiz(){
      currentquestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestions();
      questionElement.style.display = "block";
      Score.style.display = "none";
}
function showQuestions(){
      resetState();
      
      let currentQestion = questions[currentquestionIndex];
      let questionNo = currentquestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQestion.question;

      currentQestion.answers.forEach(answer=>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answer_button.appendChild(button);
            if(answer.correct){
                  button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
      })
}

function resetState(){
      nextButton.computedStyleMap.display = "none";
      while(answer_button.firstChild){
            answer_button.removeChild(answer_button.firstChild);
      }
}

function selectAnswer(e){
      const selectBtn = e.target;
      const isCorrect = selectBtn.dataset.correct === "true";
      if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
      }else{
            selectBtn.classList.add("incorrect");
      }
      Array.from(answer_button.children).forEach(button=>{
            if(button.dataset.correct === "true"){
                  button.classList.add("correct");
            }
            button.disabled = true;
      })
      nextButton.style.display = "block";
}


function showScore(){
      resetState();
      questionElement.style.display = "none";
      Score.style.display = "block";
      Score.innerHTML = `You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Play Again!";
      nextButton.style.display = "block";
}

function hadleNextButton(){
      currentquestionIndex++;
      if(currentquestionIndex<questions.length){
            showQuestions();
      }else{
            showScore();
      }
}

nextButton.addEventListener("click", ()=>{
      if(currentquestionIndex < questions.length){
            hadleNextButton();
      }else{
            startQuiz();
      }
})
startQuiz();


