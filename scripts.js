let screenContent = ''
let cache = 0

const clearButton = document.getElementById('c')
clearButton.addEventListener('click', () => {
    clear()
})

const selectNumbers = document.querySelectorAll('#nmbr')
selectNumbers.forEach((button => {
    button.addEventListener('click', () => {
        displayInput(button.innerText)
        console.log('warever')
    })
}))

function displayInput(inpt) {
    screenContent = screenContent + inpt
    display(screenContent)    
}

let calcScreen = document.querySelector('#screen')

function display(content) {
    calcScreen.innerText = content
}

function drawNumbers() {
    for (let i = 1; i <= 9; i++) {
        drawButton(i)
    }
}

function drawButton(num) {
    const box = document.getElementById('numbers')
    const newButton = document.createElement("button");
    newButton.setAttribute("id", 'btn' + num)
    newButton.innerHTML = num
    newButton.setAttribute("class", 'square nmbr')
    box.appendChild(newButton)
}

function clear() {
    calcScreen.innerText = 0
    screenContent = ''
    cache = 0
    operation = 0
}

let operation = 0

function operator(opr) {
    screenContent = Number(screenContent)
    if (operation === '/' && screenContent != 0 && screenContent != '') {
        cache = cache / screenContent
    } else if (operation === '+' || operation === 0) {
        cache = cache + screenContent
    } else if (operation === '-') {
        cache = cache - screenContent
    } else if (operation === '*') {
        cache = cache * screenContent
    } else {
        alert('error')
    }
    operation = opr
    display(cache)
}



const oprButtons = document.querySelectorAll('#opr')
oprButtons.forEach((button => {
    button.addEventListener('click', () => {
        operator(button.innerText)
    })
}))

