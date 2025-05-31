const currentDisplay = document.getElementById("currentDisplay");
const previousDisplay = document.getElementById("previousDisplay");

let shouldResetDisplay = true;
let calculusMade = false;

function appendToDisplay(input) {
    if (calculusMade) {
        if (isOperator(input)) {
            previousDisplay.value = `Ans ${currentDisplay.value}`;
            calculusMade = false;
        } else {
            previousDisplay.value = `Ans ${currentDisplay.value}`;
            currentDisplay.value = input;
            
            calculusMade = false;
            return;
        }
    }

    if (shouldResetDisplay) {
        if (input === ".") {
        currentDisplay.value = "0.";
        } else if (input === "0"){
            currentDisplay.value = "0";
        } else {
            currentDisplay.value = input;
        }

        shouldResetDisplay = false;
    } else if (calculusMade){
        currentDisplay.value = input;
        previousDisplay.value = `Ans ${currentDisplay.value}`
    } else {
        if (input === ".") {
            if (currentDisplay.value.includes(".")) return;
        }

    currentDisplay.value += input;
    }
}

function clearDisplay(){
    currentDisplay.value = "0";
    previousDisplay.value = "";    
    shouldResetDisplay = true;
}

function calculate(){
    try{
        previousDisplay.value = `Ans ${currentDisplay.value}`
        currentDisplay.value = eval(currentDisplay.value);
        calculusMade = true;


    }
    catch(error){
        currentDisplay.value = "Error";
    }
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function removeFromDisplay() {
    currentDisplay.value = currentDisplay.value.slice(0, -1);
    previousDisplay.value = "";

    if (currentDisplay.value === "") {
        currentDisplay.value = "0";
        shouldResetDisplay = true;
        calculusMade = false;
        previousDisplay.value = "";   
    }
}
