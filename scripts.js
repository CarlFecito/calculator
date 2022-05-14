let screenContent = ''
addNumbers()


function addNumbers() {
    for (let i = 1; i <= 9; i++) {
        addButton(i)
    }
}

function addButton(num) {
    const box = document.getElementById('numbers')
    const newButton = document.createElement("button");
    newButton.setAttribute("id", 'btn' + num)
    newButton.innerHTML = num
    newButton.setAttribute("class", 'square')
    box.appendChild(newButton)
}

function display(input) {
    const screen = document.getElementById('screen')
    let screenContent = screenContent + input
}