


const choice = ["rock", "paper", "scissors"]; //Array
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoise = choice[Math.floor( Math.random() * 3 )];
    let result = "";

    if(playerChoice === computerChoise ){
        result = "IT'S A TIE";    
    }

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoise === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoise === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoise === "paper") ? "YOU WIN" : "YOU LOSE";
                break;    
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoise}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            break;
    }
} 
