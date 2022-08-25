const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const clearBtn = document.querySelector('.clearBtn');
const currentTime = document.getElementById('time');
const setTimer = document.getElementById('setTimer');
const setTime = document.querySelector('.setTime');
let interval;

let counter = 0;
function startTimer() {
    counter += 1;
    currentTime.innerText = counter;
}
startBtn.addEventListener('click', () => {
    interval = setInterval(startTimer, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

clearBtn.addEventListener('click', () => {
    clearInterval(interval);
    currentTime.innerText = 0;
    counter = 0;
    setTime.value = "";
})

setTimer.addEventListener('submit', (e) => {
    e.preventDefault();
    interval = setInterval(startTimer, 1000);

    if (counter === setTime.value) {
        clearInterval(interval);
    }
})
