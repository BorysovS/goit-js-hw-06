const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', (evt) => { 
    let currentValue = evt.currentTarget.value;
    textEl.style.fontSize = `${currentValue}px`;
})