// COMMON DOM VARIABLES

let input = document.querySelector('#main-input')                // CHANGE TAG
let displayScreen = document.querySelector('#display-screen')

// EXPAND ROW AND COL AND DIV SIZE WHEN TYPING

let counter = 200
input.addEventListener('input', (e) => {
    let inputLength = e.target.value.length                     // DONT USE LENGTH
    let inputColAmount = e.target.cols
    let inputRowAmount = e.target.rows
    if (inputLength > inputColAmount) {
        displayScreen.style.width = `${counter}px`
        counter += 5
        inputColAmount++
    }
})

// ADD NEW TAB ON BUTTON CLICK

let numOfTabs = 1 
let maxNumOfTabs = 4
function addTab() {
    if (numOfTabs < maxNumOfTabs) {
        let addTabButton = document.querySelector('#new-tab')
        let ul = document.querySelector('#tabs')
        let newLi = document.createElement('LI')
        newLi.innerHTML = `Tab ${++numOfTabs}`
        ul.insertBefore(newLi, addTabButton)
    }
}