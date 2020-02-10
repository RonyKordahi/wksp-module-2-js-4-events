const body = document.querySelector("body");

//creating 20 buttons
for (let i = 1; i <= 20; ++i) {
    let button = document.createElement("button");
    button.innerText = `button ${i}`;
    button.style.backgroundColor = "red";
    button.style.paddingLeft = "2px";
    button.style.paddingRight = "2px";

    button.style.position = "absolute";
    let position = Math.floor(Math.random() * 80 + 1);
    button.style.top = `${position}%`;
    position = Math.floor(Math.random() * 80 + 1);
    button.style.left = `${position}%`;
    document.body.appendChild(button);

    function buttonClick(event) {
        if (button.style.backgroundColor === "red") {
            button.style.backgroundColor = "green";
        }
        else if (button.style.backgroundColor === "green") {
            button.style.backgroundColor = "red";
        }
    }

    button.addEventListener("click", buttonClick);
}