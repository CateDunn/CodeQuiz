var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerDisplay = document.getElementById('timer');
var score = 0;
var mainContainer = document.getElementById('main-container');
var firstContainer = document.getElementById('first-container');

var showQuestions, currentQuestionIndex;

var questions = [
  {
    question: 'This is Question 1',
    answers: [
      { text: 'Correct', correct: true },
      { text: 'Incorrect', correct: false },
      { text: 'Incorrect', correct: false },
      { text: 'Incorrect', correct: false }
    ]
  },
  {
    question: 'This is Question 2',
    answers: [
      { text: 'Incorrect', correct: false },
      { text: 'Correct', correct: true },
      { text: 'Incorrect', correct: false },
      { text: 'Incorrect', correct: false}
    ]
  },
  {
    question: 'This is Question 3',
    answers: [
      { text: 'Incorrect', correct: false },
      { text: 'Incorrect', correct: false },
      { text: 'Correct', correct: true },
      { text: 'Incorrect', correct: false }
    ]
  },
  {
    question: 'This is Question 4',
    answers: [
      { text: 'Incorrect', correct: false },
      { text: 'Incorrect', correct: false },
      { text: 'Incorrect', correct: false },
      { text: 'Correct', correct: true }
    ]
  }
];

// click the start button to begin the quiz
startButton.addEventListener('click', startQuiz);

// click the next button to go to the next question and run the setNextQuestion function
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// function that defines what the timer does
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var timerInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay.textContent = minutes + ":" + seconds;

      if (--timer === -1) {
          clearInterval(timerInterval);
          alert("You're out of time!")
          endGame ();
      }

  }, 1000);

};

// timer function starts when start button is clicked
startButton.onclick = function  () {
  var twoMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(twoMinutes, display);
};

function endGame(){
  mainContainer.classList.add('hide');
  var highScore = document.createElement('p');
  highScore.innerText = "Your score is: " +score;
  highScore.setAttribute("style", "text-align:center");
  firstContainer.appendChild(highScore);
  }

//function that begins the quiz. The start button is hidden, and the area for the questions is shown
//Question index is set to 0 to show the first question in the question array
//setNextQuestion function is run
function startQuiz() {
  startButton.classList.add('hide');
  showQuestions = questions;
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
};

//resetState function is run and showQuestion function is run using the current Question Index
function setNextQuestion() {
  resetState();
  showQuestion(showQuestions[currentQuestionIndex]);
};

//question text is shown in the question element
//buttons are created for each answer and their inner text contains the answers from the question array
//when an answer button is clicked, selectAnswer function is run
//append button to the answerButtonsElement 
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    };
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
};

//clear the document body
//hide the next button
//remove the buttons created until the next question renders
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  };
};

// targets the button with the correct answer choice
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (showQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else { 
  alert('You completed the quiz!');
  endGame();
  };
};

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    score++;
    console.log(score);
  } else {
    element.classList.add('wrong');
    
  };
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};