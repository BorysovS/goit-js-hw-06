let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const initialValue = document.querySelector('#value');

decrementBtn.addEventListener('click', onClickDecrement);
incrementBtn.addEventListener('click', onClickIncrement);

function onClickDecrement(evt) { 
    counterValue -= 1;
    initialValue.textContent = counterValue;
}

function onClickIncrement(evt) { 
    counterValue += 1;
    initialValue.textContent = counterValue;
}