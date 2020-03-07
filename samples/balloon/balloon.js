//event that listens for a key down

//if it's an arrow up
    //make balloon bigger
    //if balloon bigger than X
        //remove the event listener
        //replace balloon with explosion
        //explosion keeps growing 
            //if explosion size is y
            //fade out

//if it's a down arrow
    //make balloon smaller
    //if balloon reaches z
        //stop shrink

const balloon = document.getElementById("balloon");
let balloonSize = 12;
balloon.style.fontSize = balloonSize + "px";

const SIZE_INCREMENT = 2;
const MIN_SIZE = 6;
const MAX_SIZE = 100;
const MAX_BOOM = 1000;

function handleKeydown(event) {
    if (event.key === "ArrowUp") {
        balloonSize += SIZE_INCREMENT;
        balloon.style.fontSize = `${balloonSize}px`;

        if (balloonSize > MAX_SIZE) {
            document.removeEventListener("keydown", handleKeydown);
            balloon.innerText = "💥";
            const explosion = setInterval(function() {
                balloonSize += 50;
                balloon.style.fontSize = `${balloonSize}px`;

                if (balloonSize > MAX_BOOM) {
                    clearInterval(explosion);
                    balloon.style.opacity = 0;
                }
            },20)
        }
    }
    else if (event.key === "ArrowDown") {
        if (balloonSize > MIN_SIZE) {
            balloonSize -= SIZE_INCREMENT;
            balloon.style.fontSize = `${balloonSize}px`;
        }
    }
}

document.addEventListener("keydown", handleKeydown); 