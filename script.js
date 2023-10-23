

const container = document.querySelector('.container')
const blackBtn = document.querySelector('#blackBtn')
const greenBtn = document.querySelector('#greenBtn')
const redBtn = document.querySelector('#redBtn')
const eraserBtn = document.querySelector('#eraser')

function createDivs(numOfDivs) {
    for (let i = 0; i < numOfDivs; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv')
        newDiv.style.backgroundColor = 'white'
        container.appendChild(newDiv)
    }
}
createDivs(16*16)


/* let numOfDivs;


function createDivs(num) {
    for (let i = 0; i < num; i++){
         numOfDivs[i] = document.createElement('div')
         container.appendChild(numOfDivs)

    }

}

createDivs(4)
console.log(i) */
