

const container = document.querySelector('.grid-container')
const blackBtn = document.querySelector('#blackBtn')
const randomBtn = document.querySelector('#randomBtn')
const grayBtn = document.querySelector('#grayBtn')
const eraserBtn = document.querySelector('#eraser')
const resetBtn = document.querySelector("#reset")



function createDiv(num) {
    container.style.display = 'grid'
    container.style.gridTemplateRows = `repeat(${num} ,1fr)`;
    container.style.gridTemplateColumns = `repeat(${num} ,1fr)`;
    for(let i = 0; i < num* num; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', 'cell')
        container.appendChild(cell)

        blackBtn.addEventListener('click' ,() => {
            cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'black'; 
            event.target.style.border='none'
            })
        })

        grayBtn.addEventListener('click' ,() => {
            cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`; 
            event.target.style.border='none'
            })
        })

        randomBtn.addEventListener('click' ,() => {
            cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = randomColor(); 
            event.target.style.border='none'
            })
        })

        eraserBtn.addEventListener('click' ,() => {
            cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'whitesmoke'; 
            event.target.style.border='1px solid rgba(0, 0, 0, 0.030)';
            })
        })

        resetBtn.addEventListener('click', () => {
            cell.style.backgroundColor='whitesmoke'
            cell.style.border = '1px solid rgba(0, 0, 0, 0.030)';
        })

    }
}

function randomColor(){
    let a = Math.floor(Math.random() * 255) 
    let b = Math.floor(Math.random() * 255) 
    let c = Math.floor(Math.random() * 255) 
    return `rgba(${a},${b},${c})`
}

createDiv(32)





