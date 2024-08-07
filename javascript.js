const btn = document.querySelectorAll("button")
let displayDefault = "0"
let number1 = ""
let operator = ""
let number2 = ""
let result = ""

const operatorSymbol = ["x", "/", "+", "–"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

function updateDisplay() {
    const display = document.querySelector(".display")
    display.innerText = displayDefault
    if (displayDefault.length > 9) {
        display.innerText = displayDefault.substring(0, 9)
    }
}
updateDisplay()

function firstNumber() {
    btn.forEach(button => {
        button.addEventListener("click", e => {
            let clickedButton = e.target.innerText
            if (displayDefault.length <= 9) {
                if (numbers.includes(clickedButton) && operator.length == 0) {
                    number1 += clickedButton
                    displayDefault = number1
                    updateDisplay()
                    console.log(number1)
                }
            }
        })
    })
}

firstNumber()

function getOperator() {
    btn.forEach(button => {
        button.addEventListener("click", e => {
            let clickedButton = e.target.innerText
            if (operatorSymbol.includes(clickedButton)) {
                operator = clickedButton
                console.log(operator)
            }
        })
    })
}

getOperator()

function secondNumber() {
    btn.forEach(button => {
        button.addEventListener("click", e => {
            let clickedButton = e.target.innerText
            if (displayDefault.length <= 9) {
                if (numbers.includes(clickedButton) && operator.length > 0) {
                    number2 += clickedButton
                    displayDefault = number2
                    updateDisplay()
                    console.log(number2)
                }
            }
        })
    })
}

secondNumber()

function doTheMath() {
    const equals = document.querySelector("#result")
    equals.addEventListener("click", e => {
        if (result.length > 0) {
            number1 = ""
            operator = ""
            number2 = ""
            result = ""
            displayDefault = "0"
            updateDisplay()
        }
        if (operator === "+") {
            result = +number1 + +number2
            displayDefault = result
            updateDisplay()
        } else if (operator === "–") {
            result = +number1 - +number2
            displayDefault = result
            updateDisplay()
        } else if (operator === "x") {
            result = +number1 * +number2
            displayDefault = Math.round(result * 100000) /100000
            updateDisplay()
        } else if (operator === "/") {
            if(number2 === "0"){
                displayDefault = "Głupi?"
                updateDisplay()
            } else {
                result = +number1 / +number2
            displayDefault = Math.round(result * 100000) /100000
            updateDisplay()
            }
        }
        console.log(result)
    })
}

doTheMath()

function reset() {
    const resetBtn = document.querySelector("#reset")
    resetBtn.addEventListener("click", e => {
        number1 = ""
        operator = ""
        number2 = ""
        result = ""
        displayDefault = "0"
        updateDisplay()
    })
}

reset()

function del() {
    const removeLast = document.querySelector("#delete")
    removeLast.addEventListener("click", e => {
        if (number1.length > 0 && number2.length == 0) {
            number1 = number1.slice(0, -1)
            displayDefault = number1
        } else if (number2.length > 0 && operator.length > 0) {
            number2 = number2.slice(0, -1)
            displayDefault = displayDefault.slice(0, -1)
        }
        updateDisplay()
        keepZero()
    })
}

del()

function keepZero(){
        displayDefault = "0"
        updateDisplay()
    }
