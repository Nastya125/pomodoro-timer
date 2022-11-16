const startButton = document.querySelector("#pomodoro-start");
const pauseButton = document.querySelector('#pomodoro-pause');
const resetButton = document.querySelector('#pomodoro-reset');

const workButton = document.getElementById('btn-work');
const breakButton = document.getElementById('btn-break');

const workTimes = document.getElementById('w_times');

const breakTimes = document.getElementById('b_times');

const workInput = document.getElementById('workTime');
const breakInput = document.getElementById('breakTime');

let counter = document.getElementById('counter');

let startTimer;

let defWorkTime = 1500;
let defBreakTime = 300;

startButton.addEventListener('click', () => {

    if(defBreakTime < breakInput.value * 60){
        startTimer = setInterval(breakTimer, 1000);
    } else if (startTimer === undefined) {
        startTimer = setInterval(workTimer, 1000);
        
    } else {
        alert("Таймер уже запущен")
    }


});

resetButton.addEventListener('click', () => {
    showTime();

    counter.innerText = 0;
    stopInterval();
    startTimer = undefined;
});

pauseButton.addEventListener('click', () => {
    stopInterval();
    startTimer = undefined;
});

workButton.addEventListener('click', () => {
    workTimes.innerHTML = `${workInput.value}:` + "00";
    defWorkTime = workInput.value * 60;
});

breakButton.addEventListener('click', () => { 
    breakTimes.innerHTML = `${breakInput.value}:` + "00";
    defBreakTime = breakInput.value * 60;
});



function workTimer() {
    // Счетчик таймера работы
    const minutes = Math.floor(defWorkTime / 60);
    let seconds = defWorkTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    workTimes.innerHTML = `${minutes}:${seconds}`;
    defWorkTime--;

    if(defWorkTime < 0){
        stopInterval();
        startTimer = setInterval(breakTimer, 1000);
    }
}

function breakTimer() {
    // Счетчик таймера перерыва
    const minutes = Math.floor(defBreakTime / 60);
    let seconds = defBreakTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    breakTimes.innerHTML = `${minutes}:${seconds}`;
    defBreakTime--;

    if (defWorkTime < 0 && defBreakTime < 0){
        showTime()
        counter.innerText++;
        stopInterval();
        startTimer = setInterval(workTimer, 1000);
    }
}

function showTime(){
    workTimes.innerHTML = `${workInput.value}:` + "00";
    breakTimes.innerHTML = `${breakInput.value}:` + "00";
    defWorkTime = workInput.value * 60;
    defBreakTime = breakInput.value * 60;
}

function stopInterval() {
    clearInterval(startTimer)
}













