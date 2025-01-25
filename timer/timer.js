// timer.js

let timerInterval;
let isRunning = false;
let totalSeconds = 0;

function startStopTimer() {
    if (isRunning) {
        // Stop the timer
        clearInterval(timerInterval);
        document.getElementById('start-stop').textContent = 'Start';
    } else {
        // Start the timer
        timerInterval = setInterval(updateTime, 1000);
        document.getElementById('start-stop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    totalSeconds++;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // Format time as HH:MM:SS
    document.getElementById('display-time').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 0;
    isRunning = false;
    document.getElementById('display-time').textContent = '00:00:00';
    document.getElementById('start-stop').textContent = 'Start';
}
