const buttons = document.querySelector('.buttons')
const grid = document.querySelector('.grid');
const btnBlack = document.createElement('button');
const btnRBG = document.createElement('button');
const btnErase = document.createElement('button');
const btnGScale = document.createElement('button');
const btnClear = document.createElement('button');
const slider = document.getElementById('slider');
const value = document.getElementById('value');



value.innerText = (slider.value);

slider.oninput = function() {
    value.innerText = slider.value;
    grid.innerHTML = '';
    createGrid(slider.value, slider.value);
    blackButton();
    greyScaleButton();
    rgbButton();
    eraser();
    clear();
}

function createGrid(x, y) {
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`; 
    grid.style.gridTemplateColumns = `repeat(${y}, 1fr)`; 
    for(let i = 0; i < (x*y); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid #C2C8CA';
        grid.appendChild(div).classList.add('box');
    }
}
createGrid(slider.value, slider.value);

function blackButton() {
    btnBlack.textContent = 'Black';
    const box = grid.querySelectorAll('.box');
    btnBlack.addEventListener('click', () => { 
        box.forEach(box => box.addEventListener('mouseover', () => { //forEach(box) add an event listener
            box.style.background = 'black';
        }))
    })
    buttons.appendChild(btnBlack).classList.add('btn')
}
blackButton();

function greyScaleButton() {
    btnGScale.textContent = 'Grey Scale';
    const box = grid.querySelectorAll('.box');
    btnGScale.addEventListener('click', () => { 
        box.forEach(box => box.addEventListener('mouseover', () => { //forEach(box) add an event listener
            let rng = Math.floor(Math.random()*255) //gets random number up to 255 for the color
            box.style.background = `rgb(${rng}, ${rng}, ${rng})` //uses the same number for each r-g-b to give it a grey scale
        }))
    })
    buttons.appendChild(btnGScale).classList.add('btn')
}

greyScaleButton();

function rgbButton() {
    btnRBG.textContent = 'RBG';
    const box = grid.querySelectorAll('.box');
    btnRBG.addEventListener('click', () => {
        box.forEach(box => box.addEventListener('mouseover', () => { //forEach(box) add an event listener
            let R = Math.floor(Math.random()*255)
            let G = Math.floor(Math.random()*255) //grabs 3 random numbers up to 255
            let B = Math.floor(Math.random()*255)
            box.style.background = `rgb(${R}, ${G}, ${B})` //puts the values of the random numbers in rgb to get random colors
        }))
    })
    buttons.appendChild(btnRBG).classList.add('btn')
}
rgbButton();

function eraser() {
    btnErase.textContent = 'Eraser';
    const box = grid.querySelectorAll('.box');
    btnErase.addEventListener('click', () => { 
        box.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
        }))
    })
    buttons.appendChild(btnErase).classList.add('btn')
}
eraser();

function clear() {
    btnClear.textContent = 'Clear'
    btnClear.addEventListener('click', () => {
        const box = grid.querySelectorAll('.box');
        box.forEach(box => {
            box.style.backgroundColor = 'white';
        })
    })
    buttons.appendChild(btnClear).classList.add('btn')  
}
clear();

