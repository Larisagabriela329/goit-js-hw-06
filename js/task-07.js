const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
});
