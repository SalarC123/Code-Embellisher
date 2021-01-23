/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Images sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./Images/ sync ^\.\/.*$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./demo1.png\": \"./Images/demo1.png\",\n\t\"./demo2.png\": \"./Images/demo2.png\",\n\t\"./dice.png\": \"./Images/dice.png\",\n\t\"./download.png\": \"./Images/download.png\",\n\t\"./hamburger.png\": \"./Images/hamburger.png\",\n\t\"./main.png\": \"./Images/main.png\",\n\t\"./reset.png\": \"./Images/reset.png\",\n\t\"./resize.png\": \"./Images/resize.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./Images sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./Images/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./Novus.js":
/*!******************!*\
  !*** ./Novus.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _novus_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novus.scss */ \"./novus.scss\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction requireAll(r) {\n  r.keys().forEach(r);\n}\n\nrequireAll(__webpack_require__(\"./Images sync recursive ^\\\\.\\\\/.*$\")); // requireAll(require.context('../', false, /\\.js$/));\n// COMMON DOM VARIABLES\n\nvar input = document.querySelector('.main-input');\nvar displayScreen = document.querySelector('#display-screen');\nvar displayMenu = document.querySelector('#display-menu');\nvar tabs = document.querySelector('#tabs');\nvar addTabButton = document.querySelector('#new-tab');\nvar tabColorInput = document.querySelector('#tab-color');\nvar themes = document.querySelector('.themes');\nvar displayContent = document.querySelector('#display-content');\nvar footerCopyright = document.querySelector('footer p:last-child'); // SHOW NAVBAR LINKS THAT WERE HIDDEN DURING WINDOW RESIZE\n\nvar nav = document.querySelector('#navbar-items');\nnav.addEventListener('click', function (e) {\n  if (e.target.parentElement.classList.contains('hamburger')) {\n    document.querySelector('.hamburger-display').classList.toggle('opened');\n  }\n}); // Changes copyright year to the current year\n\nwindow.addEventListener('load', function () {\n  footerCopyright.innerText += ' ' + new Date().toLocaleDateString('en-us').slice(-4);\n}); // Give main tab the highlighted effect\n\nvar firstTab = document.querySelector('#tabs li:first-child');\n\nif (firstTab) {\n  firstTab.style.backgroundColor = tabColorInput.value;\n} // SEND MESSAGE FUNCTION\n\n\nfunction sendMessage() {\n  console.log('worked');\n} // EXPAND ROW + DIV SIZE WHEN TYPING\n\n\nvar currentInput = input;\n\nif (currentInput) {\n  var _currentInput = tabs.children[0];\n}\n\nfunction adjustBoxSize() {\n  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentInput;\n  elem.style.height = \"1px\";\n  elem.style.height = elem.scrollHeight + \"px\";\n}\n\nwindow.adjustBoxSize = adjustBoxSize; // ADD NEW TAB ON BUTTON CLICK\n\nvar numOfTabs = 1;\nvar maxNumOfTabs = 4;\n\nfunction addTab() {\n  if (numOfTabs < maxNumOfTabs) {\n    var newLi = document.createElement('LI'); // Add name\n\n    answer = prompt('Tab Name');\n\n    if (answer && answer.length < 45) {\n      newLi.innerText = answer; // ADD FUNCTION TO CHANGE FIRST TAB\n\n      tabs.insertBefore(newLi, addTabButton);\n      numOfTabs++;\n    } // Create a textarea for the new tab\n\n\n    var clonedInput = input.cloneNode(true);\n    clonedInput.classList.add('cloned', \"tab-number-\".concat(numOfTabs));\n    clonedInput.setAttribute('oninput', 'adjustBoxSize()');\n    clonedInput.style.display = 'none';\n    clonedInput.value = '';\n    displayContent.appendChild(clonedInput);\n  }\n}\n\nwindow.addTab = addTab; // CHANGE TAB ON CLICK\n\ntabs.addEventListener('click', function (e) {\n  if (e.target instanceof HTMLLIElement && !(e.target == currentTab)) {\n    // Toggle the color of the clicked tab\n    var highlightedTab = document.querySelector('.highlighted');\n    highlightedTab.classList.remove('highlighted');\n    highlightedTab.style.backgroundColor = addTabButton.style.backgroundColor;\n    e.target.classList.add('highlighted');\n    e.target.style.backgroundColor = tabColorInput.value; // removes all other textareas from view\n\n    Array.from(document.querySelectorAll('textarea')).forEach(function (elem) {\n      elem.style.display = 'none';\n    }); // Finds index of clicked tab\n\n    childNum = Array.from(e.target.parentElement.childNodes).filter(function (elem) {\n      return elem instanceof HTMLLIElement;\n    }).indexOf(e.target) + 1; // Displays new textarea\n\n    inputForTab = document.querySelector(\"textarea:nth-child(\".concat(childNum, \")\"));\n    inputForTab.style.display = 'block';\n    currentInput = inputForTab;\n    currentTab = tabs.children[childNum - 1];\n  }\n}); // CHANGE TAB AND BUTTON OUTLIINE COLOR\n\nbuttonsWithOutlines = [themes, document.querySelector('.show-hide-tabs button:nth-child(2)'), document.querySelector('.show-hide-tabs button:nth-child(3)'), document.querySelector('.font input'), document.querySelector('.reset button'), document.querySelector('.font-families'), document.querySelector('.download button')];\ntabColorInput.addEventListener('change', function (e) {\n  tabColor = e.target.value;\n  newTabColor = lightenOrDarkenColor(tabColor, 20);\n  displayMenu.style.backgroundColor = tabColor;\n  var tabsLi = document.querySelectorAll('#tabs li');\n  tabsLi.forEach(function (elem) {\n    elem.style.backgroundColor = newTabColor;\n  });\n  var highlightedTab = document.querySelector('.highlighted');\n  highlightedTab.style.backgroundColor = tabColor;\n  tabs.style.backgroundColor = newTabColor;\n  addTabButton.style.backgroundColor = newTabColor;\n\n  var _iterator = _createForOfIteratorHelper(buttonsWithOutlines),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      item = _step.value;\n      item.style.borderColor = tabColor;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}); // https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors\n\nfunction lightenOrDarkenColor(color, amount) {\n  var usePound = false;\n\n  if (color[0] == \"#\") {\n    color = color.slice(1);\n    usePound = true;\n  }\n\n  var num = parseInt(color, 16);\n  var r = (num >> 16) + amount;\n  if (r > 255) r = 255;else if (r < 0) r = 0;\n  var b = (num >> 8 & 0x00FF) + amount;\n  if (b > 255) b = 255;else if (b < 0) b = 0;\n  var g = (num & 0x0000FF) + amount;\n  if (g > 255) g = 255;else if (g < 0) g = 0;\n  return (usePound ? \"#\" : \"\") + (g | b << 8 | r << 16).toString(16);\n}\n\nwindow.lightenOrDarkenColor = lightenOrDarkenColor; // LISTEN FOR \"TAB\" BUTTON WHILE IN THE TEXT EDITOR\n// input.addEventListener('keydown', function(e) {\n//     if (e.key == 'Tab') {\n//         e.preventDefault()\n//         let startPosition = input.selectionStart\n//         startPosition += '    '\n//         https://stackoverflow.com/questions/34528022/resize-textarea-with-div\n//     }\n// })\n// CHANGE THEME \n\nvar json;\nfetch('./themes.json').then(function (res) {\n  return res.json();\n}).then(function (data) {\n  return json = data;\n});\nthemes.addEventListener('change', function (e) {\n  displayScreen.style.backgroundColor = json[\"Themes\"][e.target.value]['mainBG'];\n  document.querySelectorAll('textarea').forEach(function (elem) {\n    elem.style.backgroundColor = json[\"Themes\"][e.target.value]['textBG'];\n  });\n  document.querySelectorAll('textarea').forEach(function (elem) {\n    elem.style.color = json[\"Themes\"][e.target.value]['fontColor'];\n  });\n}); // SHOW / HIDE TABS\n\nfunction showTabs() {\n  tabs.style.display = 'flex';\n}\n\nwindow.showTabs = showTabs;\n\nfunction hideTabs() {\n  tabs.style.display = 'none';\n}\n\nwindow.hideTabs = hideTabs; // CHANGE FONT SIZE\n\nvar fontInput = document.querySelector('.font input');\nvar fontError = document.querySelector('.font-error');\nfontInput.addEventListener('input', function (e) {\n  var num = e.target.value;\n\n  if (num > 10 && num < 50) {\n    currentInput.style.fontSize = num + 'px';\n    fontError.style.opacity = '0';\n    fontError.style.top = '-5%';\n  } else {\n    fontError.style.opacity = '1';\n    fontError.style.top = '5%';\n  }\n}); // CHANGE FONT-FAMILY \n\nvar fontFamily = document.querySelector('.font-families');\nfontFamily.addEventListener('change', function (e) {\n  currentInput.style.fontFamily = e.target.value;\n}); // RESET STYLING\n\nfunction resetStyles() {\n  fontInput.value = 18;\n  tabColorInput.value = '#b1b1b1';\n  currentInput.style.fontSize = '18px';\n  currentInput.style.fontFamily = 'Menlo';\n  currentInput.style.color = 'black';\n  currentInput.style.backgroundColor = 'whitesmoke';\n  displayScreen.style.backgroundColor = 'whitesmoke';\n  tabs.style.backgroundColor = 'rgb(216, 216, 216)';\n  displayMenu.style.backgroundColor = 'rgb(177, 177, 177)';\n  addTabButton.style.backgroundColor = 'rgb(216, 216, 216)';\n  var errorBox = document.querySelector('.font-error');\n  errorBox.style.opacity = 0;\n  errorBox.style.top = '0%';\n  var allTabs = document.querySelectorAll('#tabs li');\n  allTabs.forEach(function (elem) {\n    if (!(elem == document.querySelector('.highlighted'))) {\n      elem.style.backgroundColor = 'rgb(216, 216, 216)';\n    } else {\n      elem.style.backgroundColor = 'rgb(177, 177, 177)';\n    }\n  });\n}\n\nwindow.resetStyles = resetStyles; // DOWNLOAD PICTURE\n\nfunction download() {\n  // let randomDiv = document.createElement('div')\n  // randomDiv.style.marginRight = '0'\n  // randomDiv.innerText = input.value\n  // input.replaceWith(randomDiv)\n  html2canvas(displayScreen, {\n    backgroundColor: null\n  }).then(function (canvas) {\n    var link = document.createElement(\"a\");\n    link.download = \"code.png\";\n    link.href = canvas.toDataURL(\"image/png\");\n    link.target = '_blank';\n    link.click();\n  }); // randomDiv.replaceWith(input)\n}\n\nwindow.download = download;\n\n//# sourceURL=webpack:///./Novus.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./novus.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./novus.scss ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(//db.onlinewebfonts.com/c/9f94dc20bb2a09c15241d3a880b7ad01?family=Menlo);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Yellowtail&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* DEFAULT PAGE FONT */\\n/* FONT FAMILIES */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: cornflowerblue;\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  font-family: Noto Serif SC;\\n}\\n\\n#navbar-items {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: flex-end;\\n  margin-top: 0rem;\\n  padding: 0.5rem 0rem;\\n  list-style-type: none;\\n  box-shadow: 0px 5px 20px #2c65ce;\\n}\\n#navbar-items a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n#logo {\\n  margin-right: auto;\\n  margin-left: 2rem;\\n  font-size: 2.5rem;\\n}\\n\\n.navbar-link {\\n  margin-right: 3rem;\\n  font-size: 2.5rem;\\n}\\n\\n.hamburger {\\n  display: none;\\n  margin-right: 3rem;\\n  z-index: 6;\\n}\\n.hamburger img {\\n  width: 45px;\\n  margin-top: 0.5rem;\\n  cursor: pointer;\\n}\\n.hamburger img:hover {\\n  opacity: 0.8;\\n}\\n\\n.hamburger-display {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n  position: absolute;\\n  width: 100%;\\n  height: 40vh;\\n  background-color: #4f85e9;\\n  z-index: 5;\\n  top: -500px;\\n  transition: top 1s ease-out;\\n}\\n.hamburger-display a {\\n  text-decoration: none;\\n  font-size: 30px;\\n  color: white;\\n  margin: 1rem 0;\\n}\\n.hamburger-display.opened {\\n  display: flex;\\n  top: 0%;\\n}\\n\\n@media screen and (max-width: 812px) {\\n  .navbar-link {\\n    display: none;\\n  }\\n\\n  .hamburger {\\n    display: block;\\n  }\\n}\\nheader {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 1rem 0rem;\\n  width: calc(100% - 2rem);\\n}\\nheader pre {\\n  color: white;\\n  margin: 0.5rem;\\n  font-size: 20px;\\n  font-family: Noto Serif SC;\\n}\\nheader button {\\n  padding: 8px;\\n  font-size: 20px;\\n  font-family: Noto Serif SC;\\n  background-color: cornflowerblue;\\n  border: 3px solid white;\\n  border-radius: 15px;\\n  margin-bottom: 0.5rem;\\n  cursor: pointer;\\n}\\nheader button:hover {\\n  background-color: #5186e8;\\n}\\nheader button a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n#content-wrapper {\\n  border-radius: 20px;\\n  margin-left: 0.5rem;\\n  position: absolute;\\n  background-color: #4f85e9;\\n  width: calc(100% - 1rem);\\n}\\n\\n.customizations {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-start;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  margin: 1rem 0rem;\\n}\\n\\nlabel {\\n  font-size: 1.5em;\\n  color: whitesmoke;\\n  letter-spacing: 0.05em;\\n}\\n\\n#tab-color {\\n  width: 50px;\\n  height: 50px;\\n  margin: 1rem 1rem;\\n}\\n\\n.theme-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.themes, .font-families {\\n  font-size: 13px;\\n  width: 100%;\\n  -webkit-appearance: none;\\n  padding: 4px;\\n  border: 4px solid whitesmoke;\\n}\\n\\n.show-hide-tabs {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: initial;\\n  justify-content: initial;\\n  margin: 0rem 0.5rem;\\n  text-align: center;\\n}\\n.show-hide-tabs button {\\n  background-color: white;\\n  padding: 4px;\\n  border: 4px solid whitesmoke;\\n  margin: 0.2rem;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n.show-hide-tabs button:hover {\\n  opacity: 0.8;\\n}\\n\\n.font, .reset, .download {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: initial;\\n  text-align: center;\\n}\\n.font button, .reset button, .download button {\\n  border: 4px solid whitesmoke;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  width: 20%;\\n  cursor: pointer;\\n}\\n.font button:hover, .reset button:hover, .download button:hover {\\n  opacity: 0.8;\\n}\\n\\n.reset img {\\n  width: 80%;\\n  height: 80%;\\n}\\n\\n.download img {\\n  width: 100%;\\n}\\n\\n.font input {\\n  font-size: 15px;\\n  padding: 2px;\\n  border: 4px solid whitesmoke;\\n  margin-bottom: 0.5rem;\\n  border-radius: 5px;\\n}\\n\\n.font-error {\\n  position: absolute;\\n  top: -120%;\\n  font-size: 15px;\\n  color: white;\\n  background-color: red;\\n  padding: 10px;\\n  opacity: 0;\\n  transition: all 1s ease;\\n}\\n\\n#display-screen {\\n  display: inline-block;\\n  position: relative;\\n  background-color: whitesmoke;\\n  border-radius: 10px;\\n  max-width: calc(100% - 2rem);\\n  min-width: 275px;\\n  overflow: hidden;\\n  margin: 0.5rem 1rem;\\n}\\n\\n.cloned {\\n  position: absolute;\\n  top: 0rem;\\n  display: none;\\n}\\n\\n#display-menu {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: initial;\\n  justify-content: initial;\\n  position: relative;\\n  background-color: #b1b1b1;\\n  width: 100%;\\n  height: 30px;\\n}\\n\\n.menu-circles {\\n  position: relative;\\n  width: 15px;\\n  height: 15px;\\n  margin: 8px 5px;\\n  border-radius: 50px;\\n}\\n.menu-circles:first-child {\\n  background-color: red;\\n}\\n.menu-circles:nth-child(2) {\\n  background-color: orange;\\n}\\n.menu-circles:nth-child(3) {\\n  background-color: #01c901;\\n}\\n\\n#tabs {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: initial;\\n  list-style: none;\\n  background-color: #d8d8d8;\\n}\\n#tabs li {\\n  flex: 1;\\n  text-align: center;\\n  padding-top: 5px;\\n  padding-bottom: 5px;\\n  font-size: 14px;\\n  cursor: pointer;\\n  border-bottom-left-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n}\\n#tabs button {\\n  margin-right: 7px;\\n  border: none;\\n  font-size: 20px;\\n  margin-bottom: 7px;\\n  background-color: #d8d8d8;\\n}\\n#tabs button:active {\\n  color: #8e8e8e;\\n}\\n#tabs #new-tab {\\n  padding-left: 0.4rem;\\n}\\n\\n#display-content {\\n  margin: 1rem;\\n}\\n\\n.main-input {\\n  position: relative;\\n  border: none;\\n  background-color: whitesmoke;\\n  outline: none;\\n  resize: horizontal;\\n  font-size: 18px;\\n  font-family: Menlo;\\n  min-width: 275px;\\n  max-width: calc(100% - 0.5rem);\\n}\\n\\n#output {\\n  margin: 0.5rem;\\n}\\n#output canvas {\\n  margin: 0.5rem;\\n}\\n\\n.about-card-container {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-around;\\n  margin: 1rem;\\n  flex-wrap: wrap;\\n}\\n.about-card-container .about-card-wrapper {\\n  width: 320px;\\n  height: 520px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.about-card-container .about-card-wrapper:hover .about-card {\\n  transform: rotateY(180deg);\\n}\\n.about-card-container .about-card-wrapper .about-card {\\n  width: 300px;\\n  height: 500px;\\n  transition: transform 1s ease;\\n  transform-style: preserve-3d;\\n  margin: 1rem;\\n}\\n.about-card-container .about-card-wrapper .about-card .front, .about-card-container .about-card-wrapper .about-card .back {\\n  width: 300px;\\n  height: 500px;\\n  background-color: white;\\n  backface-visibility: hidden;\\n  z-index: 100;\\n  text-align: center;\\n  border-radius: 30px;\\n  border: 5px solid white;\\n  background-color: #5082df;\\n  color: whitesmoke;\\n}\\n.about-card-container .about-card-wrapper .about-card .back {\\n  transform: rotateY(180deg);\\n  position: absolute;\\n  top: 0%;\\n  z-index: -100;\\n}\\n\\n.feedback-section {\\n  margin: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.feedback-section h1 {\\n  color: white;\\n  margin: 0.5rem;\\n  font-size: 3em;\\n}\\n.feedback-section textarea {\\n  border: none;\\n  background-color: whitesmoke;\\n  outline: none;\\n  resize: horizontal;\\n  font-size: 18px;\\n  font-family: sans-serif;\\n  min-width: 275px;\\n  max-width: 100%;\\n  margin: 0.5rem;\\n  padding: 5px;\\n}\\n.feedback-section input {\\n  margin: 0.5rem;\\n  color: white;\\n  padding: 8px;\\n  font-size: 20px;\\n  font-family: Noto Serif SC;\\n  background-color: cornflowerblue;\\n  border: 3px solid white;\\n  border-radius: 15px;\\n  margin-bottom: 0.5rem;\\n  cursor: pointer;\\n}\\n.feedback-section input:hover {\\n  background-color: #5186e8;\\n}\\n\\nfooter {\\n  position: absolute;\\n  width: 100%;\\n  left: 0;\\n  bottom: 0;\\n  background-color: cornflowerblue;\\n  box-shadow: 0px 5px 20px #2c65ce;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-evenly;\\n}\\nfooter p {\\n  color: white;\\n  padding: 20px;\\n}\\n\\n/* ---- TODO LIST ---- */\\n/* LOCALSTORAGE */\\n/* README */\\n/* ADD TO THEMES.JSON  */\\n/* ADD MORE FONTS */\\n/* FIX THEME COLORS IN JSON FILE */\\n/* HIGHLIGHTJS OR PRISMJS */\\n/* WHICH LANGUAGE (FOR SYNTAX STYLING) */\\n/* TAB NAMES??? */\\n/* STYLE \\\"SELECT\\\" TAGS */\\n/* DOWNLOAD PICTURE OR VIDEO */\\n/* RECORD VIDEO OF KEYSTROKES */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./novus.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./Images/demo1.png":
/*!**************************!*\
  !*** ./Images/demo1.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/demo1.png\");\n\n//# sourceURL=webpack:///./Images/demo1.png?");

/***/ }),

/***/ "./Images/demo2.png":
/*!**************************!*\
  !*** ./Images/demo2.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/demo2.png\");\n\n//# sourceURL=webpack:///./Images/demo2.png?");

/***/ }),

/***/ "./Images/dice.png":
/*!*************************!*\
  !*** ./Images/dice.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/dice.png\");\n\n//# sourceURL=webpack:///./Images/dice.png?");

/***/ }),

/***/ "./Images/download.png":
/*!*****************************!*\
  !*** ./Images/download.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/download.png\");\n\n//# sourceURL=webpack:///./Images/download.png?");

/***/ }),

/***/ "./Images/hamburger.png":
/*!******************************!*\
  !*** ./Images/hamburger.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/hamburger.png\");\n\n//# sourceURL=webpack:///./Images/hamburger.png?");

/***/ }),

/***/ "./Images/main.png":
/*!*************************!*\
  !*** ./Images/main.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/main.png\");\n\n//# sourceURL=webpack:///./Images/main.png?");

/***/ }),

/***/ "./Images/reset.png":
/*!**************************!*\
  !*** ./Images/reset.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/reset.png\");\n\n//# sourceURL=webpack:///./Images/reset.png?");

/***/ }),

/***/ "./Images/resize.png":
/*!***************************!*\
  !*** ./Images/resize.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Images/resize.png\");\n\n//# sourceURL=webpack:///./Images/resize.png?");

/***/ }),

/***/ "./novus.scss":
/*!********************!*\
  !*** ./novus.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_novus_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./novus.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./novus.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_novus_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_novus_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./novus.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./Novus.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;