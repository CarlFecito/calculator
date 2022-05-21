const calcScreen = document.getElementById('screen')
const prevScreen = document.getElementById('prevScreen')
const constScreen = document.getElementById('constScreen')
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
let actualOprSign = ''

function clear() {
    actualInput = ''
    prevInput = ''
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
        prevScreen.innerText += inpt
    } else if (prevScreen.innerText === '') {
        prevScreen.innerText = '0.'
    } else if (prevScreen.innerText.includes('.')) {
        return
    } else {
        prevScreen.innerText += inpt
    }
}


function addToScreen(inpt) {
    prevScreen.innerText = inpt
}

    
oprButtons.forEach((button => {
    button.addEventListener('click', () => {
        getNumbers()
        newOperation(button.id)
    })
}));



// MUST ADD 0. TO getNumbers


function getNumbers() {
    if (prevScreen != '' && actualInput != '') {
       prevInput = actualInput
       actualInput = Number(prevScreen.innerText)
    } else if (prevScreen != '' && actualInput === '') {
        actualInput = Number(prevScreen.innerText)
    } else {
        console.log('getNumber error')
    }
}

function newOperation(opr) {
    if (prevOperation != '') {
        actualOperation = opr
        prevScreen.innerText = ''
        calculate(prevOperation)
    } else {
        prevOperation = opr
        constScreen.innerHTML = prevScreen.innerText + ' ' + oprToSign(opr)
        prevScreen.innerText = ''
    }
}


function calculate(opr) {
    let result
    if (opr === 'divide') {
        result = prevInput / actualInput
    } else if (opr === 'mult') {
        result = prevInput * actualInput
    } else if (opr === 'rest') {
        result = prevInput - actualInput
    } else if (opr === 'sum') {
        result = prevInput + actualInput
    } else {
        console.log('calculate error')
    }
    prevOperation = actualOperation
    constScreen.innerHTML = result + ' ' + oprToSign(prevOperation)
}

function oprToSign(opr) {
    if (opr === 'divide') {
        return '<span>&#247;</span>'
    } else if (opr === 'mult') {
        return '<span>&#215;</span>'
    } else if (opr === 'rest') {
        return '<span>&#8722;</span>'
    } else if (opr === 'sum') {
        return '<span>&#43;</span>'
    }
}