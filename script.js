const buttonGenerateBoard = document.querySelector('#generate-board');
const idPixelBoard = '#pixel-board';
const idBoardSize = '#board-size';

function createrandomRGB() {
  return parseInt(Math.random() * 256, 10);
}

function createRandomColor() {
  return `rgb(${createrandomRGB()}, ${createrandomRGB()}, ${createrandomRGB()})`;
}

function paintPixel(e) {
  const newColor = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = newColor;
}

function generateBoard() {
  const linha = 5;
  const coluna = 5;
  const pixelBoard = document.querySelector(idPixelBoard);
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

generateBoard();

document.querySelector('#color1').style.backgroundColor = 'black';
document.querySelector('#color2').style.backgroundColor = createRandomColor();
// document.querySelector('#color2').style.backgroundColor = `rgb(${Math.floor((Math.random()*256))}, ${Math.floor((Math.random()*256))}, ${Math.floor((Math.random()*256))})`;
document.querySelector('#color3').style.backgroundColor = createRandomColor();
document.querySelector('#color4').style.backgroundColor = createRandomColor();

function markColorPalette(e) {
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
}
// Mentoria Roberval Filho
const colorPalette = document.querySelectorAll('.color');
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', markColorPalette);
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.background = 'white';
  }
}
const buttonClearBoard = document.querySelector('#clear-board');
buttonClearBoard.addEventListener('click', clearBoard);

function heightWidthGreaterThan50() {
  document.querySelector(idBoardSize).value = '50';
  document.querySelector(idPixelBoard).innerHTML = '';
  const linha = 50;
  const coluna = 50;
  const pixelBoard = document.querySelector(idPixelBoard);
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

function heightWidthCorrect() {
  document.querySelector(idPixelBoard).innerHTML = '';
  const linha = parseInt(document.querySelector(idBoardSize).value, 10);
  const coluna = parseInt(document.querySelector(idBoardSize).value, 10);
  const pixelBoard = document.querySelector(idPixelBoard);
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

function newGenerateBoard() {
  const heightWidth = parseInt(document.querySelector(idBoardSize).value, 10);
  const inputEmpty = document.querySelector(idBoardSize).value;
  if (heightWidth < 5 || inputEmpty === '') {
    alert('Board inválido!');
  } else if (heightWidth > 50) {
    heightWidthGreaterThan50();
  } else {
    heightWidthCorrect();
  }
}

buttonGenerateBoard.addEventListener('click', newGenerateBoard);
// Eu tive ajuda do Lucas Martim Sênior na area de programação Front-End
// const pixels = document.querySelectorAll('.pixel');
// for (let i = 0; i < pixels.length; i += 1) {
//     pixels[i].addEventListener('click', pintarPixel)
// }
// function pintarPixel() {
//     this.classList.add('nao');
// }
