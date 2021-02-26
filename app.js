const startBox = document.getElementById('start-box');
const startBtn = document.getElementById('start-btn');
const quizBox  = document.getElementById('quiz-box');
const questionEl = document.getElementById('question');
const choiceA  = document.getElementById('A');
const choiceB  = document.getElementById('B');
const choiceC  = document.getElementById('C');
const scoreBoard = document.getElementById('score-board');
const scoreEl = document.getElementById('score');
const replayBtn = document.getElementById('replay-btn');

let score = 0;

//Creating the questions : 
let questions = [
    {
        question: "What was Eleven's favourite food in season 1?",
        choiceA : "Eggos",
        choiceB : "Pizza",
        choiceC : "Tacos",
        correct : "A"
    },
    {
        question: "What song did Dustin sing with Suzie in season 3?",
        choiceA : "Counting Stars",
        choiceB : "Ivory Tower",
        choiceC : "Never Ending Story",
        correct : "C"
    },
    {
        question: "Who was the chief of Hawkins Police Department?",
        choiceA : "Bob Newby",
        choiceB : "Jim Hopper",
        choiceC : "Alexei",
        correct : "B"
    }
]

const lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;

//Function to generate each Question 

function generateQuestion()
{
    let q = questions[runningQuestionIndex];
    questionEl.innerHTML =q.question;
    choiceA.innerHTML =q.choiceA;
    choiceB.innerHTML =q.choiceB;
    choiceC.innerHTML =q.choiceC;

}

function generateScore()
{
    scoreEl.innerHTML = Math.round((score/ questions.length) * 100) + '%';
}

startBtn.addEventListener('click', ()=>{
quizBox.style.display ="flex";
startBox.classList.add('hidden');
generateQuestion();

});

function checkAnswer(answer)
{
  if (answer == questions[runningQuestionIndex].correct)
  score++;

  if (runningQuestionIndex < lastQuestionIndex)
  {runningQuestionIndex++;
    generateQuestion();
  }

  else 
  {
      quizBox.style.display="none";
      scoreBoard.style.display="flex";
      generateScore();

  }
}

replayBtn.addEventListener('click', ()=>{
    location.reload();
})