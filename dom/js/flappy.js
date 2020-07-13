function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function Barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira"); //instanciar o elemento Barreira

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
}
