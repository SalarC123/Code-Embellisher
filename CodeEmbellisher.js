// COMMON DOM VARIABLES

let input = document.querySelector('#main-input')                // CHANGE TAG
let displayScreen = document.querySelector('#display-screen')
const displayMenu = document.querySelector('#display-menu')
const tabs = document.querySelector('#tabs')
const addTabButton = document.querySelector('#new-tab')
let tabColorInput = document.querySelector('#tab-color')
let themes = document.querySelector('.themes')

// EXPAND ROW + DIV SIZE WHEN TYPING

input.addEventListener('input', (e) => {
    e.target.style.height = "1px";
    e.target.style.height = (e.target.scrollHeight)+"px"
})

// ADD NEW TAB ON BUTTON CLICK

let numOfTabs = 1 
let maxNumOfTabs = 4
function addTab() {
    if (numOfTabs < maxNumOfTabs) {
        let addTabButton = document.querySelector('#new-tab')
        let ul = document.querySelector('#tabs')
        let newLi = document.createElement('LI')
        answer = prompt('Tab Name: ')
        if (answer) {  
            newLi.innerHTML = answer                 // ADD FUNCTION TO CHANGE FIRST TAB
            ul.insertBefore(newLi, addTabButton)
            numOfTabs++
        }
    }
}


// CHANGE TAB COLOR

tabColorInput.addEventListener('change', (e) => {
    tabColor = e.target.value
    newTabColor = lightenColor(tabColor)
    displayMenu.style.backgroundColor = tabColor
    tabs.style.backgroundColor = newTabColor
    addTabButton.style.backgroundColor = newTabColor
    themes.style.borderColor = tabColor
})

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function lightenColor(color) {
  
    let usePound = false;
  
    if (color[0] == "#") {
        color = color.slice(1);
        usePound = true;
    }
 
    let num = parseInt(color,16);
 
    let r = (num >> 16) + 20;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    let b = ((num >> 8) & 0x00FF) + 20;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    let g = (num & 0x0000FF) + 20;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}


// LISTEN FOR "TAB" BUTTON WHILE IN THE TEXT EDITOR

// input.addEventListener('keydown', function(e) {
//     if (e.key == 'Tab') {
//         e.preventDefault()
//         let startPosition = input.selectionStart
//         startPosition += '    '
//         https://stackoverflow.com/questions/34528022/resize-textarea-with-div
//     }
// })


// CHANGE THEME 

let object;

fetch('./themes.json')
.then(res => res.json())
.then(data => object = data)

themes.addEventListener('change', (e) => {
    displayScreen.style.backgroundColor = object[e.target.value]['mainBG']
    input.style.backgroundColor = object[e.target.value]['textBG']
    input.style.color = object[e.target.value]['fontColor']
})