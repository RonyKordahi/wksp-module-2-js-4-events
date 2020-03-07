const body = document.querySelector("body");

//creating 20 buttons
for (let i = 1; i <= 20; ++i) {
    let button = document.createElement("button");
    button.id = `button${i}`;
    button.innerText = `button ${i}`;
    document.body.appendChild(button);
    button.style.backgroundColor = "red";
    button.style.marginLeft = "10px";
    button.style.marginRight = "10px";
    button.style.paddingLeft = "2px";
    button.style.paddingRight = "2px";
    button.style.marginTop = "5px";

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