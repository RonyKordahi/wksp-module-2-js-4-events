// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.querySelector("body");
const result = document.createElement("p");
const instruction = document.createElement("p");
const VICTORY = "You win!";
const DEFEAT = "You lose!";
let detect = false;


instruction.innerText = "Click fast!";
document.body.appendChild(instruction);

function clickDetector(event) {
        
    if (event) {
        detect = true;
    }

    body.removeEventListener("click", clickDetector);
}

const timer = setInterval(function() {
    if (detect === true) {
        result.innerText = `${VICTORY}`;
        document.body.appendChild(result);
        clearInterval(timer);
    }
    else if (detect === false) {
        result.innerText = `${DEFEAT}`;
        document.body.appendChild(result);
        clearInterval(timer);
    }

}, 1000);

body.addEventListener("click", clickDetector);