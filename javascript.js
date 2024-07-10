const calculator = document.querySelector("#calculator-container");
const calcDisplay = document.querySelector("#calculator-display");
const calcButtons = document.querySelector("#calculator-buttons");
const buttons = document.querySelectorAll(".buttons");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const percentage = document.querySelector(".percentage");
const backspace = document.querySelector(".backspace");
const decimal = document.querySelector(".decimal");

let valueCheck;
let firstNum = 0;
let secondNum = 0;
let operatorUsed;
let result;

// Display Area:

let display = document.createElement("div");
    display.classList.add("display");
    display.textContent = valueCheck;
    calcDisplay.appendChild(display);

// Buttons Area:

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        let valueCheck = e.target.id;
        if (display.textContent.length < 10){
            display.textContent += valueCheck;
        }
    })
})

backspace.addEventListener("click", () => {
    
})
    
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        firstNum = parseInt(display.textContent);
        operatorUsed = e.target.id;
        display.textContent = "";
    })
})

equal.addEventListener("click", () => {
    secondNum = parseInt(display.textContent);
    operate(operatorUsed,firstNum,secondNum)
    display.textContent = result;
})

clear.addEventListener("click", () =>{
    location.reload();
})

decimal.addEventListener("click", () =>{

})

percentage.addEventListener("click", () => {

})


// Functions: 

function clean() {display.textContent = ""}

function add(a,b){
    return result = a + b;
}

function subtract(a,b){
    return result = a - b;
}

function multiply(a,b){
    return result = a * b;
}

function divide(a,b){
    return result = a / b;
}

function operate(operator,num1,num2){
    if (operator == "+"){
        return add(num1,num2);
    } else if (operator == "-"){
        return subtract(num1,num2)
    } else if (operator == "*"){
        return multiply(num1,num2)
    } else if (operator == "/"){
        return divide(num1,num2)
    }
}

calculator.appendChild(calcDisplay);
calculator.appendChild(calcButtons);