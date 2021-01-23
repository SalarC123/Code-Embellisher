import "./novus.scss"
function requireAll(r) { r.keys().forEach(r); }

requireAll(require.context('./Images/', true));
// requireAll(require.context('../', false, /\.js$/));


// COMMON DOM VARIABLES

let input = document.querySelector('.main-input')
let displayScreen = document.querySelector('#display-screen')
const displayMenu = document.querySelector('#display-menu')
const tabs = document.querySelector('#tabs')
const addTabButton = document.querySelector('#new-tab')
let tabColorInput = document.querySelector('#tab-color')
let themes = document.querySelector('.themes')
let displayContent = document.querySelector('#display-content')
let footerCopyright = document.querySelector('footer p:last-child')

// SHOW NAVBAR LINKS THAT WERE HIDDEN DURING WINDOW RESIZE

let nav = document.querySelector('#navbar-items')
nav.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('hamburger')) {
        document.querySelector('.hamburger-display').classList.toggle('opened')
    }
})

// Changes copyright year to the current year
window.addEventListener('load', () => {
    footerCopyright.innerText += ' ' + new Date().toLocaleDateString('en-us').slice(-4)
})


// Give main tab the highlighted effect
let firstTab = document.querySelector('#tabs li:first-child')
if (firstTab) {
    firstTab.style.backgroundColor = tabColorInput.value
}

// SEND MESSAGE FUNCTION
function sendMessage() {
    console.log('worked')
}

// EXPAND ROW + DIV SIZE WHEN TYPING

let currentInput = input;
if (currentInput) {
    let currentInput = tabs.children[0]
}

function adjustBoxSize(elem = currentInput) {
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px"
}
window.adjustBoxSize = adjustBoxSize;

// ADD NEW TAB ON BUTTON CLICK

let numOfTabs = 1 
let maxNumOfTabs = 4
function addTab() {
    if (numOfTabs < maxNumOfTabs) {
        let newLi = document.createElement('LI')

        // Add name
        answer = prompt('Tab Name')
        if (answer && answer.length < 45) {  
            newLi.innerText = answer                 // ADD FUNCTION TO CHANGE FIRST TAB
            tabs.insertBefore(newLi, addTabButton)
            numOfTabs++
        }

        // Create a textarea for the new tab
        let clonedInput = input.cloneNode(true)
        clonedInput.classList.add('cloned', `tab-number-${numOfTabs}`)
        
        clonedInput.setAttribute('oninput', 'adjustBoxSize()')
        clonedInput.style.display = 'none'
        clonedInput.value = ''

        displayContent.appendChild(clonedInput)
    }
}
window.addTab = addTab;

// CHANGE TAB ON CLICK

tabs.addEventListener('click', (e) => {

    if (e.target instanceof HTMLLIElement && !(e.target == currentTab)) {

        // Toggle the color of the clicked tab
        let highlightedTab = document.querySelector('.highlighted')
        highlightedTab.classList.remove('highlighted')
        highlightedTab.style.backgroundColor = addTabButton.style.backgroundColor
        e.target.classList.add('highlighted')
        e.target.style.backgroundColor = tabColorInput.value

        // removes all other textareas from view
        Array.from(document.querySelectorAll('textarea')).forEach(function (elem) {
            elem.style.display = 'none'
        })

        // Finds index of clicked tab
        childNum = Array.from(e.target.parentElement.childNodes)
            .filter(
                elem => elem instanceof HTMLLIElement
            ).indexOf(e.target) + 1

        // Displays new textarea
        inputForTab = document.querySelector(`textarea:nth-child(${childNum})`)
        inputForTab.style.display = 'block'

        currentInput = inputForTab
        currentTab = tabs.children[childNum - 1]
    }
})


// CHANGE TAB AND BUTTON OUTLIINE COLOR

buttonsWithOutlines = [
    themes, 
    document.querySelector('.show-hide-tabs button:nth-child(2)'), 
    document.querySelector('.show-hide-tabs button:nth-child(3)'),
    document.querySelector('.font input'),
    document.querySelector('.reset button'),
    document.querySelector('.font-families'),
    document.querySelector('.download button')
]

tabColorInput.addEventListener('change', (e) => {
    tabColor = e.target.value
    newTabColor = lightenOrDarkenColor(tabColor, 20)
    displayMenu.style.backgroundColor = tabColor
    let tabsLi = document.querySelectorAll('#tabs li')
    tabsLi.forEach(elem => {
        elem.style.backgroundColor = newTabColor
    })
    
    let highlightedTab = document.querySelector('.highlighted')
    highlightedTab.style.backgroundColor = tabColor

    tabs.style.backgroundColor = newTabColor
    addTabButton.style.backgroundColor = newTabColor
    for (item of buttonsWithOutlines) {
        item.style.borderColor = tabColor
    }
})


// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function lightenOrDarkenColor(color, amount) {
    var usePound = false;
    if ( color[0] == "#" ) {
        color = color.slice(1);
        usePound = true;
    }

    var num = parseInt(color,16);

    var r = (num >> 16) + amount;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amount;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amount;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
window.lightenOrDarkenColor = lightenOrDarkenColor


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
    document.querySelectorAll('textarea').forEach(elem => {
        elem.style.backgroundColor = json["Themes"][e.target.value]['textBG']
    })
    document.querySelectorAll('textarea').forEach(elem => {
        elem.style.color = json["Themes"][e.target.value]['fontColor']
    })
})


// SHOW / HIDE TABS

function showTabs() {
    tabs.style.display = 'flex'
}
window.showTabs = showTabs;

function hideTabs() {
    tabs.style.display = 'none'
}
window.hideTabs = hideTabs;


// CHANGE FONT SIZE

let fontInput = document.querySelector('.font input')
let fontError = document.querySelector('.font-error')

fontInput.addEventListener('input', (e) => {
    let num = e.target.value
    if (num > 10 && num < 50) {
        currentInput.style.fontSize = num + 'px'
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
    currentInput.style.fontFamily = e.target.value
})

// RESET STYLING

function resetStyles() {
    fontInput.value = 18
    tabColorInput.value = '#b1b1b1'
    currentInput.style.fontSize = '18px'
    currentInput.style.fontFamily = 'Menlo'
    currentInput.style.color = 'black'
    currentInput.style.backgroundColor = 'whitesmoke'
    displayScreen.style.backgroundColor = 'whitesmoke'
    tabs.style.backgroundColor = 'rgb(216, 216, 216)'
    displayMenu.style.backgroundColor = 'rgb(177, 177, 177)'
    addTabButton.style.backgroundColor = 'rgb(216, 216, 216)'

    let errorBox = document.querySelector('.font-error')
    errorBox.style.opacity = 0
    errorBox.style.top = '0%'

    let allTabs =  document.querySelectorAll('#tabs li')
    allTabs.forEach(elem => {
        if (!(elem == document.querySelector('.highlighted'))) {
            elem.style.backgroundColor = 'rgb(216, 216, 216)'
        } else {
            elem.style.backgroundColor = 'rgb(177, 177, 177)'
        }
    })
}
window.resetStyles = resetStyles;

// DOWNLOAD PICTURE

function download () { 
    // let randomDiv = document.createElement('div')
    // randomDiv.style.marginRight = '0'
    // randomDiv.innerText = input.value

    // input.replaceWith(randomDiv)
    html2canvas(displayScreen, {backgroundColor:null}).then( 
        function (canvas) { 
            let link = document.createElement("a");
			link.download = "code.png";
			link.href = canvas.toDataURL("image/png");
			link.target = '_blank';
			link.click();
        }
    )
    // randomDiv.replaceWith(input)
}
window.download = download;