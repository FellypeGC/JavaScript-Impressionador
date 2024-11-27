function changeColor(elemento, cor) {
  elemento.style.color = 'cor';
}

function btnAlert() {
  alert('Botão clicado!');
}

function focusField(elemento) {
  elemento.value = 'Campo em foco';
}

function noFocusField(elemento) {
  elemento.value = '';
}

// function changeImage(image) {
//   image.src = 'imagem2.png';
// }

// function changeImageBack(image) {
//   image.src = 'imagem1.png';
// }

function changeImageEasier(image, newSrc) {
  image.src = newSrc;
}