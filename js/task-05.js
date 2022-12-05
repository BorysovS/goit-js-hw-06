
const userInput = document.querySelector('#name-input');
const userOutput = document.querySelector('#name-output');

userInput.addEventListener('input', (evt) => { 
    if (!(evt.currentTarget.value === '')) {
        userOutput.textContent = evt.currentTarget.value;
    } else {
        userOutput.textContent = 'Anonymous';
    }
})


