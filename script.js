const buttonGenerateBoard = document.querySelector('#generate-board');
generateBoard();
function generateBoard () {
    let linha = 5;
    let coluna = 5;
    let pixelBoard = document.querySelector('#pixel-board');
    for (let l = 0; l < linha; l += 1) {
        const criaLinha = document.createElement('div');
        criaLinha.classList.add('line');
        pixelBoard.appendChild(criaLinha);
        for (let c = 0; c < coluna; c += 1) {
            const criaColuna = document.createElement('div');
            criaColuna.classList.add('pixel');
            criaColuna.addEventListener('click', paintPixel);
            criaLinha.appendChild(criaColuna);
        }
    }
}
let color1 = document.querySelector('#color1').style.backgroundColor = 'black';
let color2 = document.querySelector('#color2').style.backgroundColor = 'red';
let color3 = document.querySelector('#color3').style.backgroundColor = 'blue';
let color4 = document.querySelector('#color4').style.backgroundColor = 'green';

// Mentoria Roberval Filho
const colorPalette = document.querySelectorAll('.color');
for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', markColorPalette)
}

function markColorPalette(e) {
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
}

function paintPixel (e) {
    const newColor = document.querySelector('.selected').style.backgroundColor;
    e.target.style.backgroundColor = newColor;
}

const buttonClearBoard = document.querySelector('#clear-board');
buttonClearBoard.addEventListener('click', clearBoard);
function clearBoard() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.background = 'white';
    }
}
function newGenerateBoard() {
    const heightWidth = parseInt(document.querySelector('#board-size').value);
    const inputEmpty = document.querySelector('#board-size').value;
    if (heightWidth < 5 || inputEmpty === '') {
        alert('Board inválido!');
    } else if (heightWidth > 50) {
        document.querySelector('#board-size').value = '50';
        document.querySelector('#pixel-board').innerHTML = '';
        let linha = 50;
        let coluna = 50;
        let pixelBoard = document.querySelector('#pixel-board');
        for (let l = 0; l < linha; l += 1) {
            const criaLinha = document.createElement('div');
            criaLinha.classList.add('line');
            pixelBoard.appendChild(criaLinha);
            for (let c = 0; c < coluna; c += 1) {
                const criaColuna = document.createElement('div');
                criaColuna.classList.add('pixel');
                criaColuna.addEventListener('click', paintPixel);
                criaLinha.appendChild(criaColuna);
            }
        }
    } else {
        document.querySelector('#pixel-board').innerHTML = '';
        let linha = parseInt(document.querySelector('#board-size').value);
        let coluna = parseInt(document.querySelector('#board-size').value);
        let pixelBoard = document.querySelector('#pixel-board');
        for (let l = 0; l < linha; l += 1) {
            const criaLinha = document.createElement('div');
            criaLinha.classList.add('line');
            pixelBoard.appendChild(criaLinha);
            for (let c = 0; c < coluna; c += 1) {
                const criaColuna = document.createElement('div');
                criaColuna.classList.add('pixel');
                criaColuna.addEventListener('click', paintPixel);
                criaLinha.appendChild(criaColuna);
            }
        }
    }
}

buttonGenerateBoard.addEventListener('click', newGenerateBoard)
// Eu tive ajuda do Lucas Martim Sênior na area de programação Front-End
// const pixels = document.querySelectorAll('.pixel');
// for (let i = 0; i < pixels.length; i += 1) {
//     pixels[i].addEventListener('click', pintarPixel)
// }
// function pintarPixel() {
//     this.classList.add('nao');
// }