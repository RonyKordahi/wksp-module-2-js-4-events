const body = document.querySelector("body");
const VICTORY = "You win!";
const DEFEAT = "You lose! :(";
let buttonCounter = 0;
let detectVictory = false;

//start button
const startButton = document.createElement("button");
startButton.innerText = "Start game";
startButton.style.position = "absolute";
startButton.style.top = "50%";
startButton.style.left = "50%";
document.body.appendChild(startButton);

//random button and time
function randomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}

//random position
function randomPosition() {
    return Math.floor(Math.random() * 80 +1);
}

//game being started
function startGame() {
    document.body.removeChild(startButton);
    startButton.removeEventListener("click", startGame);
    let condition = randomNumber();

    alert(`You have ${condition} seconds to click ${condition} buttons!`);

    for (let i = 1; i <= condition; ++i) {
        //creating buttons
        const button = document.createElement("button");
        button.innerText = "Click me!";
        button.style.backgroundColor = "red";
        button.style.paddingLeft = "2px";
        button.style.paddingRight = "2px";
        button.style.position = "absolute";
        button.style.left = `${randomPosition()}%`;
        button.style.top = `${randomPosition()}%`;
        document.body.appendChild(button);

        //button click effect
        function buttonClick(event) {
            ++buttonCounter;

            if (button.style.backgroundColor === "red") {
                button.style.backgroundColor = "green";
            }
            if (buttonCounter === condition) {
                detectVictory = true;
            }
        }

        
        button.addEventListener("click", buttonClick);
    }
    const gameTimer = setInterval(function() {
        if (detectVictory){
            clearInterval(gameTimer);
            alert(VICTORY);
            location.reload();
            button.removeEventListener("click", buttonClick);
        }
        else {
            clearInterval(gameTimer);
            alert(DEFEAT);
            location.reload();
            button.removeEventListener("click", buttonClick);
        }
    }, condition * 1000);
}

startButton.addEventListener("click", startGame);