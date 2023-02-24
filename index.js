let homeScr = document.getElementById("home-scr")
let guestScr = document.getElementById("guest-scr")

let home = 0
let guest = 0

function addOneH() {
    home += 1
    homeScr.textContent = home
    console.log("clicked")

}

function addTwoH() {
    home += 2
    homeScr.textContent = home
    console.log("clicked")

}

function addTriH() {
    home += 3
    homeScr.textContent = home
    console.log("clicked")

}

function addOneG() {
    guest += 1
    guestScr.textContent = guest
    console.log("clicked")

}

function addTwoG() {
    guest += 2
    guestScr.textContent = guest
    console.log("clicked")

}

function addTriG() {
    guest += 3
    guestScr.textContent = guest
    console.log("clicked")

}
