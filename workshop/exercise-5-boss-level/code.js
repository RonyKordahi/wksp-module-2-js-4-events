//essential variables
const body = document.querySelector("body");
const signal = document.createElement("img");
const player1 = document.createElement("img");
const player2 = document.createElement("img");
const spanInstruction = document.createElement("span");
let player1Round = 0; //counter for how many times P1 has won
let player2Round = 0; //counter for how many times P2 has won
let player1Win = false;
let player2Win = false;
const span = document.createElement("span");


//background of the game
body.style.backgroundImage = "url('./imgs/bg.gif')";
body.style.backgroundSize = "100%";

//background music of the game
function playMusic() {
    new Audio('./sounds/bg.mp3').play();
}

window.onload =  playMusic();

//style function
function style(value) {
    value.style.backgroundColor = "darkBlue";
    value.style.color = "white";
    value.style.padding = "10px 30px";
    value.style.border = "thick solid red";
    value.style.marginBottom = "30px";
}

//start button
const start = document.createElement("button");
start.innerText = "Start";
style(start);
document.getElementById("buttons").appendChild(start);

//instruction button (does nothing yet)
const instruction = document.createElement("button");
instruction.innerText = "Instructions";
style(instruction);
document.getElementById("buttons").appendChild(instruction);

//modifying the div to display the buttons correctly
const div = document.getElementById("buttons");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.paddingTop = "230px";

//random position generator
function randomPosition() {
    return Math.floor(Math.random() * 85 + 1);
}

//displaying and removing the signal
function signalDisplay() {
    let timer = Math.floor(Math.random() * 5 + 1);

    const delay = setTimeout(function() {
        new Audio('./sounds/signal.mp3').play();
        signal.setAttribute("src", "imgs/signal.png");
        signal.setAttribute("alt", "signal");
        signal.style.position = "absolute";
        signal.style.top = `${randomPosition()}%`;
        signal.style.left = `${randomPosition()}%`;
        signal.style.height = "50px";
        document.body.appendChild(signal);
        const removeSignal = setInterval(function () {
            document.body.removeChild(signal);
            clearInterval(removeSignal);
        }, 1000)
        
        //detecting which player pressed first
        document.addEventListener("keydown", competition);
    }, timer * 1000);
}

//detecting player inputs and deciding who won
function competition(event) {
    //creating prize
    const prize = document.createElement("img");
    prize.setAttribute("src", "./imgs/prize.gif");
    prize.setAttribute("alt", "prize");
    prize.style.height = "30px";
    prize.style.position = "absolute";
    prize.style.top = 0;

    //detecting players
    if (event.key === "q") {
        ++player1Round;
        document.removeEventListener("keydown", competition);
        player1.setAttribute("src", "imgs/p1win.gif");
        new Audio('./sounds/prize.mp3').play();
        const animation = setTimeout(function() {
            player1.setAttribute("src", "imgs/p1.gif");
        }, 1000);
        span.appendChild(prize);
        prize.style.left = `${3 * player1Round}%`;
        document.getElementById("p1-prize").appendChild(span);
        if (player1Round === 3) {
            player1Win = true;
            clearTimeout(animation);
            victoryScreen();
        }
        else {
            signalDisplay();
        }
    }
    else if (event.key === "p") {
        ++player2Round;
        document.removeEventListener("keydown", competition);
        player2.setAttribute("src", "imgs/p2win.gif");
        new Audio('./sounds/prize.mp3').play();
        const animation = setTimeout(function() {
            player2.setAttribute("src", "imgs/p2.gif");
        }, 1000);
        span.appendChild(prize);
        prize.style.right = `${3 * player2Round}%`;
        document.getElementById("p2-prize").appendChild(prize);
        if (player2Round === 3) {
            player2Win = true;
            clearTimeout(animation);
            victoryScreen();
        }
        else {
            signalDisplay();
        }
    }
}

//victory screen
function victoryScreen(){
    if (player1Win) {
        span.innerText = "Player 1 wins!";
        span.style.fontSize = "50px";
        style(span);
        document.getElementById("buttons").appendChild(span);
        player1.setAttribute("src", "imgs/p1win.gif");
    }
    else if (player2Win) {
        span.innerText = "Player 2 wins!";
        span.style.fontSize = "50px";
        style(span);
        document.getElementById("buttons").appendChild(span);
        player2.setAttribute("src", "imgs/p2win.gif");
    }
    resetButton();
}


//restart button
function resetButton() {
    const resetButton = document.createElement("button");
    resetButton.innerText = "Restart game";
    style(resetButton);
    document.getElementById("buttons").appendChild(resetButton);

    resetButton.addEventListener("click", restartGame);
}

//restarting the game
function restartGame(event) {
    window.location.reload();
}

//game start
function startGame(event) {
    
    start.style.display = "none";
    instruction.style.display = "none";
    start.removeEventListener("click", startGame);

    //p1
    player1.setAttribute("src", "imgs/p1.gif");
    player1.setAttribute("alt", "player 1");
    player1.style.height = "100px";
    player1.style.position = "absolute";
    player1.style.bottom = 0;
    document.body.appendChild(player1);

    //p2
    player2.setAttribute("src", "imgs/p2.gif");
    player2.setAttribute("alt", "player 2");
    player2.style.height = "100px";
    player2.style.position = "absolute";
    player2.style.bottom = 0;
    player2.style.right = 0;
    document.body.appendChild(player2);
    
    //calling the signal
    signalDisplay();
}

//instruction window
function instructions(event) {
    instruction.removeEventListener("click", instructions);
    start.style.display = "none";
    instruction.style.display = "none";
    spanInstruction.innerText = "Two players wait for a signal to start after a random delay. Once the start\n signal, first person to press their key wins. If a player presses before the signal \n appears, they lose. Player one presses the Q key and player two presses the P key.\n (Click on the box to start)";
    style(spanInstruction);
    document.getElementById("buttons").appendChild(spanInstruction);

    spanInstruction.addEventListener("click", redirect);
}

function redirect() {
    spanInstruction.removeEventListener("click", redirect);
    spanInstruction.style.display = "none";
    startGame();
}

start.addEventListener("click", startGame);
instruction.addEventListener("click", instructions);