const calcScreen = document.getElementById('screen')
const prevScreen = document.getElementById('prevScreen')
const oprScreen = document.getElementById('oprScreen')
const constScreen = document.getElementById('constScreen')
const nmbrButtons = document.querySelectorAll('#nmbr')
const equalButton = document.getElementById('equal')
const oprButtons = document.querySelectorAll('.opr')
const clearButton = document.getElementById('c')
const signButton = document.getElementById('sign')
const delButton = document.getElementById('del')

let actualOperation = ''
let prevOperation = ''

function clear() {
    oprScreen.innerHTML = ''
    prevScreen.innerText = ''
    constScreen.innerText = ''
    calcScreen.innerText = ''
    actualOperation = ''
    prevOperation = ''
}

clearButton.addEventListener('click', () => {
    clear()
})

/// FALTA ARREGLAR EL SIGNO MENOS PARA QUE PONGA NUMEROS NEGARIVOS

nmbrButtons.forEach((button => {
    button.addEventListener('click', () => {
        input(button.innerText)
        checkResult()
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
        if (button.id === 'rest' && oprScreen.innerHTML != '' && prevScreen.innerText === '') {
            prevScreen.innerText += '-'
        } else if (Number(prevScreen.innerText) != NaN && Number(prevScreen.innerText) != '') {
            newOperation(button.id)
        } else {
            prevOperation = button.id
            oprScreen.innerHTML = oprToSign(button.id)
        }
    })
}));


function newOperation(opr) {
    if (oprScreen.innerHTML != '') {
        actualOperation = opr
        calculate(prevOperation)
    } else {
        prevOperation = opr
        constScreen.innerText = prevScreen.innerText
        oprScreen.innerHTML = oprToSign(opr)
        prevScreen.innerText = ''    
    }
}


function calculate(opr) {
    let result
    let prevInput = Number(constScreen.innerText)
    let actualInput = Number(prevScreen.innerText)
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
    constScreen.innerText = result
    oprScreen.innerHTML = oprToSign(prevOperation)
    prevScreen.innerText = ''
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

function checkResult() {
    if (prevScreen != '' && oprScreen.innerHTML != '') {
        tempResult(prevOperation)
    } console.log('no operation yet to show')
}

function tempResult(opr) {
    let result
    let prevInput = Number(constScreen.innerText)
    let actualInput = Number(prevScreen.innerText)
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
    calcScreen.innerText = result
}