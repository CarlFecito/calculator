let calcScreen = document.querySelector('#screen')
let screenPrev = document.querySelector('#prev')
let screenSign = document.querySelector('#sign')
let screenContent = ''
let actualNumber = 0
let previousNumber = ''
let actualOperation = ''
let prevOperation = 'skip'
let result
clear()

function clear() {
    calcScreen.innerText = 0
    screenPrev.innerText = ''
    screenSign.innerText = ''
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
        numberInput(button.innerText)
    })
}))

function numberInput(inpt) {
    screenContent = screenContent + inpt
    display(screenContent)    
}

function display(content) {
    calcScreen.innerText = content
}

function displayOpr(input) {
    if (input === 'divide') {
        screenSign.innerHTML = `<span>&#247;</span>`
    } else if (input === 'mult') {
        screenSign.innerHTML = `<span>&#215;</span>`
    } else if (input === 'rest') {
        screenSign.innerHTML = `<span>&#8722;</span>`
    } else if (input === 'sum') {
        screenSign.innerHTML = `<span>&#43;</span>`
    } else if (input === 'equal') {
        screenSign.innerHTML = `<span>&#61;</span>`
    } else {
        console.log('error')
    }
}

function displayPrev(content) {
    screenPrev.innerText = content
}

const oprButtons = document.querySelectorAll('.opr')
oprButtons.forEach((button => {
    button.addEventListener('click', () => {
        operator(button.id)
        displayOpr(button.id)
    })
}))

function operator(opr) {
    actualNumber = Number(screenContent)
    if (opr === 'equal') {
        screenContent = ''
        calculate(previousNumber, actualNumber, prevOperation)
    } else if (prevOperation === 'skip') {
        previousNumber = actualNumber
        prevOperation = opr
        displayPrev(actualNumber)
        screenContent = ''
        display('0')
    } else {
        actualOperation = opr
        calcScreen.innerText = 0
        screenContent = ''
        calculate(previousNumber, actualNumber, prevOperation)
        prevOperation = actualOperation
    }
}

function calculate(number1, number2, operation1) {
    if (operation1 === 'divide' && number2 === 0) {
        alert(`can't divide by zero`)
    } else if (operation1 === 'divide') {
        result = number1 / number2
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
    displayPrev(previousNumber)
    display('0')
}