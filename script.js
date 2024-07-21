const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let min = 0;
let sec = 0;
let mili = 0;

let timerId = null;

startBtn.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    min = sec = mili = 0;
});

function startTimer() {
    mili++;
    if (mili == 100) {
        mili = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let minString = min < 10 ? `0${min}` : min;
    let secString = sec < 10 ? `0${sec}` : sec;
    let miliString = mili < 10 ? `0${mili}` : mili;

    timerDisplay.innerHTML = `
        ${minString} : ${secString} : ${miliString}
    `;
}