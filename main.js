// console.log('TP1')

// console.log(document.getElementById('output'))

const output = document.getElementById('output-1')
output.innerHTML = 'BONJOUR'
// const document = { innerHTML: 'Bonjour' }

const div = document.createElement('div')
div.innerHTML = 'AUREVOIR'

const allDivs = document.getElementsByTagName('div')
const section = document.getElementsByTagName('section')
const elementByClassName = document.getElementsByClassName('output-2')

// console.log(allDivs, 'div')
// console.log(section, 'section')
// console.log(section[0].children, 'children')
// console.log(elementByClassName, elementByClassName, 'got the div by class name')
const sectionDivs = section[0].children

// console.log(sectionDivs)
// for (div of sectionsDivs) {
//     console.log('dans le for')
//     console.log(div, 'dans le for in')
// }

// sectionDivs.forEach( function( div, i) {
//    div.innerHTML = `div numero ${i}`
// })

for (let item in sectionDivs) {
    console.log('dans le for')
    console.log(item, 'dans le for in')
    sectionDivs[item].innerHTML = `div - numero ${item}` 
    sectionDivs[item].style = 'background-color: red'
}

setTimeout( () => { 
    console.log('main.js')
 }, 10 * 1000)
 