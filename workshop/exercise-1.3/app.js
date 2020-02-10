// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector("body");
const result = document.createElement("p");
const instruction = document.createElement("p");
const VICTORY = "You win!";
const DEFEAT = "You lose!";
const button = document.createElement("button");
button.innerText = "Start";

let timer = Math.floor(Math.random() * 5 + 1);
let miliseconds = timer * 1000;
let detect = false;

document.body.appendChild(button);

function programStart(event) {

    document.getElementById('timer').innerText = timer;
    
    function clickDetect(event) {
        if (event) {
            detect = true;
        }

        body.removeEventListener("click", clickDetect);
    }

    const chrono = setInterval(function () {
        if (detect === true) {
            result.innerText = `${VICTORY}`;
            document.body.appendChild(result);
            clearInterval(chrono);
        }
        else if (detect === false) {
            result.innerText = `${DEFEAT}`;
            document.body.appendChild(result);
            clearInterval(chrono);
        }
    }, miliseconds);

    body.addEventListener("click", clickDetect);
    button.addEventListener("click", programStart);
}

button.addEventListener("click", programStart);