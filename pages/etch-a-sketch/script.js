const board = document.querySelector("#etch-board");

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div)
    }
}