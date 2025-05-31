const currentDisplay = document.getElementById("currentDisplay");

let shouldResetDisplay = true;

function appendToDisplay(input) {
    if (shouldResetDisplay) {
        if (input === ".") {
        currentDisplay.value = "0.";
        } else if (input === "0"){
            currentDisplay.value = "0";
        } else {
            currentDisplay.value = input;
        }

        shouldResetDisplay = false;

    } else {
        if (input === ".") {
            if (currentDisplay.value.includes(".")) return;
        }

    currentDisplay.value += input;
    }
}



function clearDisplay(){
    currentDisplay.value = "0";
    shouldResetDisplay = true;
}