import { errorHide } from './utils.js';
import { } from './howler.js';


let intervalHandle
let secondsRemaining;
let sound = new Howl({
    src: ['../sound/gong.mp3']
});

function resetPage() {
    //show input
    document.getElementById("inputArea").style.display = "block";
    //hide pause button by default
    document.getElementById("pauseArea").style.display = "none";
    //hide resume button
    document.getElementById("resumeArea").style.display = "none";
    //hide refresh button
    document.getElementById("refresh").style.display = "none";
    //reset value to blank
    document.getElementById("minutes").value = "";
    setTimeout(errorHide, 6000);
}

function resumeCountdown() {
    tick();
    intervalHandle = setInterval(tick, 1000);
    //hide resume button when resuming
    document.getElementById("resumeArea").style.display = "none";
    //show resume button;
    document.getElementById("pauseArea").style.display = "block";
    return;
}

function tick() {
    let timeDisplay = document.getElementById("time");

    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining - (min * 60);

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    let message = min + ":" + sec;
    timeDisplay.innerHTML = message;

    if (secondsRemaining === 0) {
        document.getElementById("errorMessage").innerHTML = "<strong>Время вышло!</strong>";
        clearInterval(intervalHandle);
        resetPage();
        sound.play();
    }
    secondsRemaining--;
}

function pauseCountdown() {
    clearInterval(intervalHandle);
    document.getElementById("pauseArea").style.display = "none";
    document.getElementById("resumeArea").style.display = "block";
    return;
}

function startCountdown() {
    let minutes = document.getElementById("minutes").value;

    //check if it is a number
    if (isNaN(minutes) || minutes == "") {
        document.getElementById("errorMessage").innerHTML = "Воу! Это не число. <strong>ПОПРОБУЙ ЗАНОВО, БОЙ</strong>";

        //hides error after 5 secs
        setTimeout(errorHide, 5000);
        resetPage();
        return;
    }
    //get the seconds
    secondsRemaining = minutes * 60;
    //reoccuring function
    intervalHandle = setInterval(tick, 1000);
    //hide input form once running
    document.getElementById("inputArea").style.display = "none";
    //show pause when running
    document.getElementById("pauseArea").style.display = "block";
    //show refresh when running
    document.getElementById("refresh").style.display = "block";
}
//refresh page with button
document.getElementById("refresh").onclick = function () {
    clearInterval(intervalHandle);
    document.getElementById("time").innerHTML = "00:00";
    document.getElementById("minutes").value = "";
    document.getElementById("inputArea").style.display = "block";
    document.getElementById("refresh").style.display = "none";
    document.getElementById("resumeArea").style.display = "none";
    document.getElementById("pauseArea").style.display = "none";
}
window.onload = function () {
    //break button
    let startButton = document.getElementById("breakBtn");
    startButton.onclick = function () {
        startCountdown();
    };
    //pause button
    let pauseButton = document.getElementById("pauseBtn");
    pauseButton.onclick = function () {
        pauseCountdown();
    };

    //resume button
    let resumeButton = document.getElementById("resumeBtn");
    resumeButton.onclick = function () {
        resumeCountdown();
    };
    document.getElementById("inputArea").appendChild(startButton);
    document.getElementById("pauseArea").appendChild(pauseButton);
    document.getElementById("resumeArea").appendChild(resumeButton);

    //hide pause button by default
    document.getElementById("pauseArea").style.display = "none";
    //hide pause button by default
    document.getElementById("resumeArea").style.display = "none";
    //hide refresh by default
    document.getElementById("refresh").style.display = "none";
};