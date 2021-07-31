const buttonsContainer_div = document.querySelector('.buttons')
const container_div = document.getElementById('container');
const btnBlack = document.createElement('button');
const btnRBG = document.createElement('button');
const btnSize = document.createElement('button');
const btnErase = document.createElement('button');
const btnGScale = document.createElement('button');


function createGrid(x, y) {
    for(let i = 0; i < (x*y); i++) {
        const div = document.createElement('div')
        div.style.border = '1px solid blue';
        container_div.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        container_div.style.gridTemplateRows = `repeat(${y}, 1fr)`;
        container_div.appendChild(div).classList.add('square')
    }
}
createGrid(16,16)


function blackButton() {
    btnBlack.textContent = 'Black'
    const boxes = container_div.querySelectorAll('.square')
    btnBlack.addEventListener('click', () => { 
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black'
        }))
    })
    buttonsContainer_div.appendChild(btnBlack).classList.add('btn')
}
blackButton();

function greyScaleButton() {
    btnGScale.textContent = 'Grey Scale'
    const boxes = container_div.querySelectorAll('.square')
    btnGScale.addEventListener('click', () => { 
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rng = Math.floor(Math.random()*255)
            box.style.background = `rgb(${rng}, ${rng}, ${rng})`
        }))
    })
    buttonsContainer_div.appendChild(btnGScale).classList.add('btn')
}
greyScaleButton();

function rgbButton() {
    btnRBG.textContent = 'RBG'
    const boxes = container_div.querySelectorAll('.square')
    btnRBG.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random()*255)
            let G = Math.floor(Math.random()*255)
            let B = Math.floor(Math.random()*255)
            box.style.background = `rgb(${R}, ${G}, ${B})`
        }))
    })
    buttonsContainer_div.appendChild(btnRBG).classList.add('btn')
}
rgbButton()