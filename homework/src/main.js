import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import './timer.js'
import './../styles/main.css';
import './../sound/gong.mp3';

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else {
        dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    }
}

function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("time").innerHTML = `${hours} + : + ${minutes} + : + ${seconds}`;
    const timer = setTimeout(startTime, 1000);
};
const start = document.querySelector('.startBtn');
const stop = document.querySelector('.stopBtn');
start.addEventListener('click', () => {
    startTime();
});
document.addEventListener('click', () => {
    clearTimeout(timer);
});