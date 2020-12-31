// COMMON DOM VARIABLES

let input = document.querySelector('#main-input')                // CHANGE TAG
let displayScreen = document.querySelector('#display-screen')

// EXPAND ROW + DIV SIZE WHEN TYPING

input.addEventListener('input', (e) => {
    e.target.style.height = "1px";
    e.target.style.height = (e.target.scrollHeight)+"px"
    console.log(e.target.scrollHeight)
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

// CHANGE TAB COLOR

const displayMenu = document.querySelector('#display-menu')
const tabs = document.querySelector('#tabs')
const addTabButton = document.querySelector('#new-tab')

function changeTabColor () {
    let tabColorInput = document.querySelector('#tab-color')
    let rgb = tabColorInput.value.slice(4,-1).split(',')
    let newRGB = `rgb(${parseInt(rgb[0]) + 20},${parseInt(rgb[1]) + 20},${parseInt(rgb[2]) + 20})`
    displayMenu.style.backgroundColor = tabColorInput.value
    tabs.style.backgroundColor = newRGB
    addTabButton.style.backgroundColor = newRGB
    tabColorInput.value = ''
}

// // LISTEN FOR "TAB" BUTTON WHILE IN THE TEXT EDITOR

// input.addEventListener('keydown', function(e) {
//     if (e.key == 'Tab') {
//         e.preventDefault()
//         let startPosition = input.selectionStart
//         startPosition += '    '
//         https://stackoverflow.com/questions/34528022/resize-textarea-with-div
//     }
// })
