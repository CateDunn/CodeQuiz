console.log('testing');

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerDisplay = document.getElementById('timer');

startButton.addEventListener('click', startQuiz);


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

startButton.onclick = function  () {
  var twoMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(twoMinutes, display);
};


function startQuiz() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide');
  startTimer()
}
