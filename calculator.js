const displayScreen = document.querySelector("#display");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelector("#six");
const buttonSeven = document.querySelector("#seven");
const buttonEight = document.querySelector("#eight");
const buttonNine = document.querySelector("#nine");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");

let app = {
    result: 0,
    num1: 0,
    num2: 0,
    currentValue: "",
    currentOperation: ""
}

resetCalculator = () => {
    app.result = 0;
    app.currentValue = "";
    app.num1 = 0;
    app.num2 = 0;
    displayScreen.textContent = 0;
}

updateDisplay = (text) => {
    displayScreen.textContent = text;
}

handleNumberClick = (value) => {
    app.currentValue += value;
    updateDisplay(app.currentValue);
}

handleOperationClick = (value) => {
    calculateResult();
    if (app.result != 0) {
        app.num1 = app.result
    } else {
        app.num1 = parseFloat(app.currentValue);
    }
    app.currentOperation = value;
    app.currentValue = "";
}

add = (_num1, _num2) => {
    return _num1 + _num2;
}

subtract = (_num1, _num2) => {
    return _num1 - _num2;
}

multiply = (_num1, _num2) => {
    return _num1 * _num2;
}

divide = (_num1, _num2) => {
    return _num1 / _num2;
}

calculateResult = () => {
    app.num2 = parseFloat(app.currentValue);
    switch (app.currentOperation) {
        case "+":
            app.result = add(app.num1, app.num2);
            updateDisplay(app.result);
            break;
        case "-":
            app.result = subtract(app.num1, app.num2);
            updateDisplay(app.result);
            break;
        case "*":
            app.result = multiply(app.num1, app.num2);
            updateDisplay(app.result);
            break;
        case "/":
            app.result = divide(app.num1, app.num2);
            updateDisplay(app.result);
            break;
        default:
            break;
    }
    
}

document.addEventListener('keypress', (event) => {
    switch(event.key) {
        case "0":
            updateUserValue(event.key);
            break;
        case "1":
            buttonOne.classList.add("active");
            setTimeout(() => {
                buttonOne.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "2":
            buttonTwo.classList.add("active");
            setTimeout(() => {
                buttonTwo.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "3":
            buttonThree.classList.add("active");
            setTimeout(() => {
                buttonThree.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "4":
            buttonFour.classList.add("active");
            setTimeout(() =>{
                buttonFour.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break; 
        case "5":
            buttonFive.classList.add("active");
            setTimeout(() => {
                buttonFive.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "6":
            buttonSix.classList.add("active");
            setTimeout(() => {
                buttonSix.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "7":
            buttonSeven.classList.add("active");
            setTimeout(() =>{
                buttonSeven.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "8":
            buttonEight.classList.add("active");
            setTimeout(() =>{
                buttonEight.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "9":
            buttonNine.classList.add("active");
            setTimeout(() =>{
                buttonNine.classList.remove("active");
            }, 100);
            handleNumberClick(event.key);
            break;
        case "+":
        plusButton.classList.add("activeOperator");
        setTimeout(() => {
            plusButton.classList.remove("activeOperator");
        }, 100);
        handleOperationClick(event.key);
            break;
        case "-":
            minusButton.classList.add("activeOperator");
            setTimeout(() => {
                minusButton.classList.remove("activeOperator");
            }, 100);
            handleOperationClick(event.key);
            break;
        case "*":
            multiplyButton.classList.add("activeOperator");
            setTimeout(() => {
                multiplyButton.classList.remove("activeOperator");
            }, 100);
            handleOperationClick(event.key);
            break;
        case "/":
            divideButton.classList.add("activeOperator");
            setTimeout(() => {
                divideButton.classList.remove("activeOperator");
            }, 100);
            handleOperationClick(event.key);
            break;
        case "=":
            equalsButton.classList.add("activeOperator");
            setTimeout(() => {
                equalsButton.classList.remove("activeOperator");
            }, 100);
            calculateResult();
            break;
        default:
            updateDisplay("0");
          
      }         
});
