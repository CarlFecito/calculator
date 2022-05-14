let screenContent = ''
let cache = 0
drawNumbers()

const clearButton = document.getElementById('C')
clearButton.addEventListener('click', () => {
    clear()
})

const selectNumbers = document.querySelectorAll('.nmbr')
selectNumbers.forEach((button => {
    button.addEventListener('click', () => {
        displayInput(button.innerText)
    })
}))

let calcScreen = document.querySelector('#screen')
function displayInput(inpt) {
    screenContent = screenContent + inpt
    calcScreen.innerText = screenContent    
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
}

/* para las operaciones usar un array 0, operaciones
                                #1  , operaciones   
                                #2 , operaciones */