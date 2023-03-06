let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 2
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count);
}


function clr() {
    saveEl.textContent = "Previous entries:"
    countEl.textContent = 0
    count = 0
    console.log(count)
}
