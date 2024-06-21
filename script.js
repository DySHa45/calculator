let currentInput = '';
let lastInput = '';
let lastOperation = '';

const display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function operate(operation) {
    if (operation === 'sqrt') {
        if (currentInput === '') return;
        const num = parseFloat(currentInput);
        if (num < 0) {
            alert('Square root of a negative number is not allowed');
            clearDisplay();
            return;
        }
        display.value = Math.sqrt(num).toFixed(5);
        currentInput = display.value;
    } else if (operation === 'inverse') {
        if (currentInput === '0') {
            alert('Division by zero is not allowed');
            clearDisplay();
            return;
        }
        display.value = (1 / parseFloat(currentInput)).toFixed(5);
        currentInput = display.value;
    } else {
        lastInput = currentInput;
        lastOperation = operation;
        currentInput = '';
    }
}

function calculate() {
    if (currentInput === '' || lastInput === '') return;
    let result = parseFloat(lastInput);
    let currentNum = parseFloat(currentInput);
    
    switch (lastOperation) {
        case '+':
            result += currentNum;
            break;
        case '-':
            result -= currentNum;
            break;
        case '*':
            result *= currentNum;
            break;
        case '/':
            if (currentNum === 0) {
                alert('Division by zero is not allowed');
                clearDisplay();
                return;
            }
            result /= currentNum;
            break;
        case '**':
            result = Math.pow(result, currentNum);
            break;
        default:
            result = currentNum;
            break;
    }
    
    display.value = result.toFixed(5);
    currentInput = '';
    lastInput = '';
    lastOperation = '';
}