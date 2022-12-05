const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value) { 
        alert('Заповни свої данні!!!');
    }

    const userEmail = email.value;
    const userPassword = password.value;

    const formData = {
        userEmail,
        userPassword,
    };

    console.log(formData);
    formEl.reset();
}