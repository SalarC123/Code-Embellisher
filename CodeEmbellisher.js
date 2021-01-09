// COMMON DOM VARIABLES

let input = document.querySelector('.main-input')
let displayScreen = document.querySelector('#display-screen')
const displayMenu = document.querySelector('#display-menu')
const tabs = document.querySelector('#tabs')
const addTabButton = document.querySelector('#new-tab')
let tabColorInput = document.querySelector('#tab-color')
let themes = document.querySelector('.themes')
let displayContent = document.querySelector('#display-content')

// EXPAND ROW + DIV SIZE WHEN TYPING

let currentTab = input; // use this for changing font size and family in other parts of the code

function adjustBoxSize(elem) {
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px"
}

// input.addEventListener('input', (e) => {
//     e.target.style.height = "1px";
//     e.target.style.height = (e.target.scrollHeight)+"px"
// })

// ADD NEW TAB ON BUTTON CLICK

let numOfTabs = 1 
let maxNumOfTabs = 4
function addTab() {
    if (numOfTabs < maxNumOfTabs) {
        let newLi = document.createElement('LI')

        // Add name
        answer = prompt('Tab Name')
        if (answer) {  
            newLi.innerHTML = answer                 // ADD FUNCTION TO CHANGE FIRST TAB
            tabs.insertBefore(newLi, addTabButton)
            numOfTabs++
        }

        // Create a textarea for the new tab
        let clonedInput = input.cloneNode(true)
        clonedInput.classList.add('cloned', `tab-number-${numOfTabs}`)
        clonedInput.oninput = 'adjustBoxSize(clonedInput)'
        clonedInput.value = ''

        displayContent.appendChild(clonedInput)
    }
}

// CHANGE TAB ON CLICK

tabs.addEventListener('click', (e) => {
    // e.target.classList.toggle('highlighted')
    if (e.target instanceof HTMLLIElement) {

        // removes all other textareas out of view
        Array.from(document.querySelectorAll('textarea')).forEach(function (elem) {
            elem.style.display = 'none'
        })

        // Finds which tab was clicked
        childNum = Array.from(e.target.parentElement.childNodes)
            .filter(
                elem => elem instanceof HTMLLIElement
            ).indexOf(e.target) + 1


        inputForTab = document.querySelector(`textarea:nth-child(${childNum})`)
        inputForTab.style.display = 'block'

        currentTab = inputForTab
    }
})


// CHANGE TAB AND BUTTON OUTLIINE COLOR

buttonsWithOutlines = [
    themes, 
    document.querySelector('.show-hide-tabs button:nth-child(2)'), 
    document.querySelector('.show-hide-tabs button:nth-child(3)'),
    document.querySelector('.font input'),
    document.querySelector('.reset button'),
    document.querySelector('.randomize button'),
    document.querySelector('.font-families'),
    document.querySelector('.download button')
]

tabColorInput.addEventListener('change', (e) => {
    tabColor = e.target.value
    newTabColor = lightenColor(tabColor)
    displayMenu.style.backgroundColor = tabColor
    tabs.style.backgroundColor = newTabColor
    addTabButton.style.backgroundColor = newTabColor
    for (item of buttonsWithOutlines) {
        item.style.borderColor = tabColor
    }
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

let json;

fetch('./themes.json')
.then(res => res.json())
.then(data => json = data)

themes.addEventListener('change', (e) => {
    displayScreen.style.backgroundColor = json["Themes"][e.target.value]['mainBG']
    input.style.backgroundColor = json["Themes"][e.target.value]['textBG']
    input.style.color = json["Themes"][e.target.value]['fontColor']
})


// SHOW / HIDE TABS

function showTabs() {
    tabs.style.display = 'flex'
}

function hideTabs() {
    tabs.style.display = 'none'
}


// CHANGE FONT SIZE

let fontInput = document.querySelector('.font input')
let fontError = document.querySelector('.font-error')

fontInput.addEventListener('input', (e) => {
    let num = e.target.value
    if (num > 10 && num < 50) {
        input.style.fontSize = num + 'px'
        fontError.style.opacity = '0'
        fontError.style.top = '-5%'
    } else {
        fontError.style.opacity = '1'
        fontError.style.top = '5%'
    }
})

// CHANGE FONT-FAMILY 

let fontFamily = document.querySelector('.font-families')

fontFamily.addEventListener('change', (e) => {
    input.style.fontFamily = e.target.value
})

// RESET STYLING

function resetStyles() {
    fontInput.value = 18
    input.style.fontSize = '18px'
    input.style.fontFamily = 'Menlo'
    input.style.color = 'black'
    input.style.backgroundColor = 'whitesmoke'
    displayScreen.style.backgroundColor = 'whitesmoke'
    tabs.style.backgroundColor = 'rgb(216, 216, 216)'
    displayMenu.style.backgroundColor = 'rgb(177, 177, 177)'
    addTabButton.style.backgroundColor = 'rgb(216, 216, 216)'
}

// RANDOM STYLING

function randomize() {
    // change - color,theme,fontSize,fontFamily
    let randomRGB = `rgb(${Math.floor(Math.random()*255) + 1}, ${Math.floor(Math.random()*255) + 1}, ${Math.floor(Math.random()*255) + 1})`

}

// DOWNLOAD PICTURE

function download () { 
    // let randomDiv = document.createElement('div')
    // randomDiv.style.marginRight = '0'
    // randomDiv.innerText = input.value

    // input.replaceWith(randomDiv)
    html2canvas(displayScreen, {backgroundColor:null}).then( 
        function (canvas) { 
            document.getElementById('output').appendChild(canvas)
        }
    )
    // randomDiv.replaceWith(input)
}


// SHOW NAVBAR LINKS THAT WERE HIDDEN DURING WINDOW RESIZE

function openHamburgerMenu() {
    document.querySelector('.hamburger-display').classList.toggle('opened')
}


// fetch('https://reqres.in/api/users', {
//     method: "POST",
//     headers: {
//         "Content-Type": 'application/json'
//     },
//     body: JSON.stringify({
//         age:13,
//         height:62
//     })
// })
// .then(res => res.json())
//   .then(data => console.log(data))