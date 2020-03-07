// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.querySelector("body");
const result = document.createElement("p");

function clickDetect(event) {
    result.innerText = "You clicked a thing!";
    document.body.appendChild(result);
    body.removeEventListener("click", clickDetect);
}

body.addEventListener("click", clickDetect);