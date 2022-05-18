let calcScreen = document.querySelector('#screen')
let screenContent = ''
let actualNumber = 0
let previousNumber = ''
let actualOperation = ''
let prevOperation = 'skip'
let result
clear()

function clear() {
    calcScreen.innerText = 0
    screenContent = ''
    actualNumber = 0
    previousNumber = ''
    actualOperation = ''
    prevOperation = 'skip'
}

const clearButton = document.getElementById('c')
clearButton.addEventListener('click', () => {
    clear()
})

const selectNumbers = document.querySelectorAll('#nmbr')
selectNumbers.forEach((button => {
    button.addEventListener('click', () => {
        displayInput(button.innerText)
    })
}))

function displayInput(inpt) {
    screenContent = screenContent + inpt
    display(screenContent)    
}

function display(content) {
    calcScreen.innerText = content
}

const oprButtons = document.querySelectorAll('.opr')
oprButtons.forEach((button => {
    button.addEventListener('click', () => {
        operator(button.id)
    })
}))

function operator(opr) {
    actualNumber = Number(screenContent)
    console.log(prevOperation)
    if (opr === 'equal') {
        screenContent = ''
        calculate(previousNumber, actualNumber, prevOperation)
        prevOperation = 'skip'
        
    } else if (prevOperation === 'skip') {
        previousNumber = actualNumber
        prevOperation = opr
        console.log(prevOperation)
        calcScreen.innerText = previousNumber
        screenContent = ''
    } else {
        actualOperation = opr
        calcScreen.innerText = 0
        screenContent = ''
        calculate(previousNumber, actualNumber, prevOperation)
        prevOperation = actualOperation
        
    }
}

function calculate(number1, number2, operation1) {
    console.log(operation1)
    if (operation1 === 'divide' && number2 === 0) {
        alert(`can't divide by zero`)
    } else if (operation1 === 'divide') {
        result = number1 / number2
        console.log(result)
        end(result)
    } else if (operation1 === 'mult') {
        result = number1 * number2
        console.log(result)
        end(result)
    } else if (operation1 === 'rest') {
        result = number1 - number2
        console.log(result)
        end(result)
    } else if (operation1 === 'sum') {
        result = number1 + number2
        console.log(result)
        end(result)
    } else {
        console.log('error')
    }
}

function end(num) {
    calcScreen.innerText = num
    previousNumber = num
}