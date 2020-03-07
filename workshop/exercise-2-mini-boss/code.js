const body = document.querySelector("body");
const span = document.createElement("span");
const span2 = document.createElement("span");
const button = document.createElement("button");

//date
let today = new Date();
let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
span.innerHTML = time;

const timeDisplay = setInterval(function() {
    today = new Date();
    time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    span.innerHTML = time;
    document.getElementById("clock").appendChild(span);
}, 1000)

//stopwatch create
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatch = `${hours}:${minutes}:${seconds}`;
let buttonPress = 0;

//stopwatch 
function counterStart(event) {
    ++buttonPress;
    const stopwatchCounter = setInterval(function(){
        if (buttonPress % 2 === 1) {
            ++seconds;

            if (seconds === 60) {
                seconds = 0;
                ++minutes;
            }
            if (minutes === 60) {
                minutes = 0;
                ++hours;
            }
            stopwatch = `${hours}:${minutes}:${seconds}`;
            span2.innerHTML = stopwatch;
            document.getElementById("watch").appendChild(span2);
        }
        else {
            span2.innerHTML = stopwatch;
            document.getElementById("watch").appendChild(span2);
            clearInterval(stopwatchCounter);
        }
    }, 1000);
}

button.innerText = "Start/Stop";
document.querySelector(".watch").appendChild(button);
button.addEventListener("click", counterStart);

//timer
let userInput = "";
let userHour = 0;
let userMinute = 0;
let userSecond = 0;
let timer = 0;
const span3 = document.createElement("span");
const button2 = document.createElement("button");
button2.innerText = "Countdown!";
let userButtonPress = 0;

document.getElementById("userInstructions").appendChild(button2);

function startTimer(event) {
    userInput = document.getElementById("textBox").value;
    ++userButtonPress;
    
    if (userButtonPress > 1) {
        alert("Please refresh the page to reset the timer");
    }
    else {
            if (isNaN(userInput)) {
                alert("Please insert numbers only!");
            }
            else {
                userHour = Math.floor(userInput / 3600);
                userMinute = Math.floor((userInput - userHour * 3600) / 60);
                userSecond = Math.floor((userInput - userHour * 3600) - userMinute * 60);
                timer = `${userHour}:${userMinute}:${userSecond}`;
                document.getElementById("timer").appendChild(span3);
        
                const timerCountdown = setInterval(function() {
                    if (userSecond > 0 || userMinute > 0 || userHour > 0) {
                        if (userSecond > 0) {
                            --userSecond;
                        }
                        if (userSecond === 0 && userMinute > 0) {
                            --userMinute;
                            userSecond = 59
                        }
                        if (userMinute === 0 && userHour > 0) {
                            --userHour;
                            userMinute = 60;
                        }
                        if (userSecond === 0 && userMinute === 0 && userHour === 0) {
                            clearInterval(timerCountdown);
                            userButtonPress = 0;
                            new Audio('./Quack-Sound-Effect.mp3').play();
                        }
                    }
                    timer = `${userHour}:${userMinute}:${userSecond}`;
                    span3.innerHTML = timer;
                    document.getElementById("timer").appendChild(span3);
                }, 1000);
            }
    }
}

button2.addEventListener("click", startTimer);