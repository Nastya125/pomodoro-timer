const startButton = document.querySelector("#pomodoro-start");
const pauseButton = document.querySelector('#pomodoro-pause');
const resetButton = document.querySelector('#pomodoro-reset');

const workMinuts = document.getElementById('w_minutes');
const workSeconds = document.getElementById('w_seconds');

const breakMinuts = document.getElementById('b_minutes');
const breakSeconds = document.getElementById('b_seconds');

let counter = document.getElementById('counter');

let startTimer;

startButton.addEventListener('click', () => {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Таймер уже запущен")
    }

});

resetButton.addEventListener('click', () => {
    workMinuts.innerText = 25;
    workSeconds.innerText = "00";

    breakMinuts.innerText = 5;
    breakSeconds.innerText = "00"

    counter.innerText = 0;
    stopInterval();
    startTimer = undefined;
});

pauseButton.addEventListener('click', () => {
    stopInterval();
    startTimer = undefined;
});


function timer() {
    // Счетчик таймера работы
    if (workSeconds.innerText != 0) {
        workSeconds.innerText--;
    } else if (workMinuts.innerText != 0 && workSeconds.innerText == 0) {
        workSeconds.innerText = 59;
        workMinuts.innerText--;
    }

    // Счетчик таймера перерыва
    if (workSeconds.innerText == 0 && workMinuts.innerText == 0) {
        if (breakSeconds.innerText != 0) {
            breakSeconds.innerText--;
        } else if (breakMinuts.innerText != 0 && breakSeconds.innerText == 0) {
            breakSeconds.innerText = 59;
            breakMinuts.innerText--;
        }
    }

    // Счетчик кругов (работа+перерыв)
    if (workMinuts.innerText == 0 && workSeconds.innerText == 0 && breakMinuts.innerText == 0 && breakSeconds.innerText == 0) {
        workMinuts.innerText = 25;
        workSeconds.innerText = "00";

        breakMinuts.innerText = 5;
        breakSeconds.innerText = "00"

        counter.innerText++;
    }

//    if (workMinuts.innerText == 0 && workSeconds.innerText == 0 && breakMinuts.innerText == 0 && breakSeconds.innerText == 4) {
//         console.log("Пора отдыхать!")

//     }

//     if (workMinuts.innerText == 25 && workSeconds.innerText == 0 && breakMinuts.innerText == 5 && breakSeconds.innerText == 0) {
//         console.log("Пора работать!")
//     }

}


function stopInterval() {
    clearInterval(startTimer)
}













