const calcScreen = document.getElementById('screen')
const miniScreen = document.getElementById('prevScreen')
const nmbrButtons = document.querySelectorAll('#nmbr')
const equalButton = document.getElementById('equal')
const oprButtons = document.querySelectorAll('.opr')
const clearButton = document.getElementById('c')
const signButton = document.getElementById('sign')
const delButton = document.getElementById('del')

let actualInput
let prevInput
let actualOperation = ''
let prevOperation = ''

function clear() {
    actualInput = undefined
    prevInput = undefined
    actualOperation = ''
    prevOperation = ''

}

nmbrButtons.forEach((button => {
    button.addEventListener('click', () => {
        input(button.innerText)
    })
}));

function input(inpt) {
    if (inpt != '.') {
        addToScreen(inpt)
    } else if (calcScreen.innerText.includes('.')) {
        return
    } else {
        addToScreen(inpt)
    }
}

function addToScreen(inpt) {
    if (calcScreen.innerText != '0') {
        calcScreen.innerText += inpt 
    } else {
        calcScreen.innerText = inpt
    }
}

function addToMiniScreen(inpt) {
    miniScreen.innerText = inpt
}

    

oprButtons.forEach((button => {
    button.addEventListener('click', () => {
        newOperation(button.id)
    })
}));

function newOperation(opr) {
    if (prevOperation != '') {
        actualOperation = opr
        calculate(prevOperation)
        calcScreen.innerText = '0'
    } else {
        prevOperation = opr
        addToMiniScreen(calcScreen.innerText)
        calcScreen.innerText = '0'
    }
}


function calculate(opr) {
    let number1 = Number(miniScreen.innerText)
    let number2 = Number(calcScreen.innerText)
    let result
    if (opr === 'divide') {
        result = number1 / number2
    } else if (opr === 'mult') {
        result = number1 * number2
    } else if (opr === 'rest') {
        result = number1 - number2
    } else if (opr === 'sum') {
        result = number1 + number2
    } else return
    prevOperation = actualOperation
    prevScreen.innerText = result
}