let linha = 5
let coluna = 5
let pixelBoard = document.querySelector('#pixel-board');
for (let l = 0; l < linha; l += 1) {
    const criaLinha = document.createElement('div');
    criaLinha.classList.add('line');
    pixelBoard.appendChild(criaLinha);
    for (let c = 0; c < coluna; c += 1) {
        const criaColuna = document.createElement('div');
        criaColuna.classList.add('pixel')
        criaLinha.appendChild(criaColuna);
    }
}




const blackPalette = document.querySelector('.black');
const redPalette = document.querySelector('.red');
const bluePalette = document.querySelector('.blue');
const greenPalette = document.querySelector('.green');

blackPalette.addEventListener('click', selectedPaletteBlack);
redPalette.addEventListener('click', selectedPaletteRed);
bluePalette.addEventListener('click', selectedPaletteBlue);
greenPalette.addEventListener('click', selectedPaletteGreen);


function selectedPaletteBlack() {
    blackPalette.classList.add('selected');
    redPalette.classList.remove('selected');
    bluePalette.classList.remove('selected');
    greenPalette.classList.remove('selected');
}
function selectedPaletteRed() {
    blackPalette.classList.remove('selected');
    redPalette.classList.add('selected');
    bluePalette.classList.remove('selected');
    greenPalette.classList.remove('selected');
}
function selectedPaletteBlue() {
    blackPalette.classList.remove('selected');
    redPalette.classList.remove('selected');
    bluePalette.classList.add('selected');
    greenPalette.classList.remove('selected');
}
function selectedPaletteGreen() {
    blackPalette.classList.remove('selected');
    redPalette.classList.remove('selected');
    bluePalette.classList.remove('selected');
    greenPalette.classList.add('selected');
}

// const pixelBoard = document.querySelectorAll('#pixel-board');