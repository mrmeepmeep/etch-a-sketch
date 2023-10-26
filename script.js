

const container = document.querySelector('.grid-container')
const blackBtn = document.querySelector('#blackBtn')
const greenBtn = document.querySelector('#greenBtn')
const redBtn = document.querySelector('#redBtn')
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

        
            cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'blue'; 
            event.target.style.border='none'
            })
   
    }
}
createDiv(32)






