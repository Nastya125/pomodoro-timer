const startButton = document.querySelector("#pomodoro-start");
const pauseButton = document.querySelector('#pomodoro-pause');
const resetButton = document.querySelector('#pomodoro-reset');

const workButton = document.getElementById('btn-work');
const breakButton = document.getElementById('btn-break');

const workMinuts = document.getElementById('w_minutes');
const workSeconds = document.getElementById('w_seconds');

const breakMinuts = document.getElementById('b_minutes');
const breakSeconds = document.getElementById('b_seconds');

const workInput = document.getElementById('workTime');
const breakInput = document.getElementById('breakTime');

let counter = document.getElementById('counter');

let startTimer;

let defWorkTime = 25;
let defBreakTime = 5;

startButton.addEventListener('click', () => {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Таймер уже запущен")
    }

});

resetButton.addEventListener('click', () => {
    workMinuts.innerText = defWorkTime;
    workSeconds.innerText = "00";

    breakMinuts.innerText = defBreakTime;
    breakSeconds.innerText = "00"

    counter.innerText = 0;
    stopInterval();
    startTimer = undefined;
});

pauseButton.addEventListener('click', () => {
    stopInterval();
    startTimer = undefined;
});

workButton.addEventListener('click', () => {
    defWorkTime = workInput.value;
    workMinuts.innerText = defWorkTime;
})

breakButton.addEventListener('click', () => {
    defBreakTime = breakInput.value;
    breakMinuts.innerText = defBreakTime;
})



function timer() {
    // Счетчик таймера работы
    let numberWorkSeconds = Number(workSeconds.innerText);
    let numberWorkMinuts = Number(workMinuts.innerText);

    let numberBreakSeconds = Number(breakSeconds.innerText);
    let numberBreakMinuts = Number(breakMinuts.innerText);
    
    if (numberWorkSeconds) {
        workSeconds.innerText--;
    } else if (numberWorkMinuts && !numberWorkSeconds) {
        workSeconds.innerText = 59;
        workMinuts.innerText--;
    }

    // Счетчик таймера перерыва
    if (!numberWorkSeconds && !numberWorkMinuts) {
        if (numberBreakSeconds) {
            breakSeconds.innerText--;
        } else if (numberBreakMinuts && !numberBreakSeconds) {
            breakSeconds.innerText = 59;
            breakMinuts.innerText--;
        }
    }

    // Счетчик кругов (работа+перерыв)
    if (!numberWorkMinuts && !numberWorkSeconds && !numberBreakMinuts && !numberBreakSeconds) {
        workMinuts.innerText = defWorkTime;
        workSeconds.innerText = "00";

        breakMinuts.innerText = defBreakTime;
        breakSeconds.innerText = "00"

        counter.innerText++;
    }

}


function stopInterval() {
    clearInterval(startTimer)
}













