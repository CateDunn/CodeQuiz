console.log('testing');

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)


function startQuiz() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
}
