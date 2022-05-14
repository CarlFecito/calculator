function addNumbers() {
    for (i = 0; i <= 9; i++) {
        addDiv(i, 'numbers')
    }
}


function addDiv(num, cont) {
    const box = document.getElementById(cont)
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", num)
    newDiv.innerHTML = num
    newDiv.setAttribute("class", 'square')
    box.appendChild(newDiv)
}

function display(input) {
    const screen = document.getElementById('screen')
    let screenContent = ''
}