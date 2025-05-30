const board = document.querySelector("#etch-board");
const form = document.querySelector("#size-form");
const input = document.querySelector("#grid-size");

form.addEventListener("submit", getSize);

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    board.innerHTML = "";

    for (let i = 0; i < numDiv; i++){
        let div = document.createElement("div");
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