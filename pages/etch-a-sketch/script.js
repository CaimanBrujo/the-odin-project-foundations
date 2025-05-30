const board = document.querySelector("#etch-board");
const form = document.querySelector("#size-form");
const input = document.querySelector("#grid-size");

const blackBtn = document.querySelector("#black-btn");
const randomBtn = document.querySelector("#random-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const resetBtn = document.querySelector("#reset-btn");

let currentColor = "black";
let resetState = false;
let mouseDown = false;


form.addEventListener("submit", getSize);
blackBtn.addEventListener("click", () => currentColor = "black");
randomBtn.addEventListener("click", () => currentColor = "random");
eraserBtn.addEventListener("click", () => currentColor = "white");
resetBtn.addEventListener("click", resetBoard);


document.body.addEventListener("mousedown", () => mouseDown = true);
document.body.addEventListener("mouseup", () => mouseDown = false);



function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;
    board.innerHTML = "";

    for (let i = 0; i < numDiv; i++){
        const div = document.createElement("div");
        div.classList.add("grid-square");

        // Desktop interaction
        div.addEventListener("mousedown", () => {
        colorCell(div);
        });

        div.addEventListener("mouseover", () => {
        if (mouseDown) colorCell(div);
        });

         // Mobile interaction
        div.addEventListener("touchstart", (e) => {
            e.preventDefault();
            colorCell(div);
        }, { passive: false });

        div.addEventListener("touchmove", (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
            if (touchedElement && touchedElement.classList.contains("grid-square")) {
            colorCell(touchedElement);
            }
        }, { passive: false });

        board.insertAdjacentElement("beforeend", div)
    }
}

function getSize(e){
    e.preventDefault();
    const size = parseInt(input.value);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createBoard(size);
}

function colorCell(cell) {
    if (currentColor === "random") {
        const hue = Math.floor(Math.random() * 360);
        cell.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    } else {
        cell.style.backgroundColor = currentColor;
    }
}

function resetBoard(){
    const cells = document.querySelectorAll(".grid-square");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}