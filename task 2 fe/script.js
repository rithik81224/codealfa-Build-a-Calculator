// Append a number or decimal to the display
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // Evaluates the expression
    } catch (error) {
        display.value = "Error";
    }
}
