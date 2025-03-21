let seconds = 0;
let minutes = 0;
let timer;
let isRunning = false;

const secondsSpan = document.getElementById('seconds');
const minutesSpan = document.getElementById('minutes');
const startButton = document.getElementById('startTimer');
const stopButton = document.getElementById('stopTimer');
const resetButton = document.getElementById('resetTimer');

function updateTimerDisplay() {
  secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
  minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
}

function tick() {
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  updateTimerDisplay();
}

startButton.addEventListener('click', function() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(tick, 1000);
  }
});

stopButton.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
});

resetButton.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  updateTimerDisplay();
});

updateTimerDisplay();