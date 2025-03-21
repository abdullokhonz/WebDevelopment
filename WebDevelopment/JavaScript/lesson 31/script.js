let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
};

function stopTimer() {
    clearInterval(timerInterval);
};

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        };
    };
};

function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
};

function pauseTimer() {
    
};

const timerElements = document.getElementById('timer');
timerElements.textContent = ''; //string