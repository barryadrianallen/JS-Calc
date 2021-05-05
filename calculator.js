const displayText = document.querySelector("#display");
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

var result = 0;

const resetCalculator = function(){
    displayText.textContent = "0";
    result = 0;
    currentValue = "";
    userValueArray = [];
}

const updateDisplay = function(text){
    displayText.textContent = text;
}

//This is called when the onclick function in HTML is fired - when user clicks in the div
//Each div passes an argument e.g '2' or '+'
var currentValue = "";
function updateUserValue(value){
    //currentValue is appended each time a number button is clicked
    currentValue += value;
    updateDisplay(currentValue);
}

var userValueArray = [];

//This function is called when '+, -, ÷, *' is clicked and the relevant operator
//is passed. 
function placeValueInArray(operator){
    
    //Calling this function here allows us to display the running total
    calculateResult();
    userValueArray.push(currentValue);
    userValueArray.push(operator);
    currentValue = "";
}

//Called when '=' button is clicked 
function calculateResult(){
    let totalUserExpression = "";

    //We need to add the last number to our array before doing the calculation
    userValueArray.push(currentValue);

    //Each value in the array is added to the totalUserExpression var
    for (i=0; i<userValueArray.length; i++){
        totalUserExpression += userValueArray[i];
    }
    //eval() requires the format ("2+5.7-6.3") as an argument, for example
    result = eval(totalUserExpression);

    updateDisplay(result);

    //We replace the values in the array with the result, which allows the calculator
    //to continue.
    userValueArray = [result]; 
    currentValue = ""
}

document.addEventListener('keypress', function(event){
    switch(event.key) {
        case "0":
            updateUserValue(event.key);
            break;
        case "1":
            buttonOne.classList.add("active");
            setTimeout(function() {
                buttonOne.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "2":
            buttonTwo.classList.add("active");
            setTimeout(function() {
                buttonTwo.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "3":
            buttonThree.classList.add("active");
            setTimeout(function() {
                buttonThree.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "4":
            buttonFour.classList.add("active");
            setTimeout(function() {
                buttonFour.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break; 
        case "5":
            buttonFive.classList.add("active");
            setTimeout(function() {
                buttonFive.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "6":
            buttonSix.classList.add("active");
            setTimeout(function() {
                buttonSix.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "7":
            buttonSeven.classList.add("active");
            setTimeout(function() {
                buttonSeven.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "8":
            buttonEight.classList.add("active");
            setTimeout(function() {
                buttonEight.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "9":
            buttonNine.classList.add("active");
            setTimeout(function() {
                buttonNine.classList.remove("active");
            }, 100);
            updateUserValue(event.key);
            break;
        case "+":
        plusButton.classList.add("activeOperator");
        //setTimeout(), this time with arrow functions
        setTimeout(() => {
            plusButton.classList.remove("activeOperator");
        }, 100);
            placeValueInArray(event.key);
            break;
        case "-":
            minusButton.classList.add("activeOperator");
            setTimeout(() => {
                minusButton.classList.remove("activeOperator");
            }, 100);
            placeValueInArray(event.key);
            break;
        case "*":
            multiplyButton.classList.add("activeOperator");
            setTimeout(() => {
                multiplyButton.classList.remove("activeOperator");
            }, 100);
            placeValueInArray(event.key);
            break;
        case "/":
            divideButton.classList.add("activeOperator");
            setTimeout(() => {
                divideButton.classList.remove("activeOperator");
            }, 100);
            placeValueInArray(event.key);
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
