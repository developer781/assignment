const DOM = {
    btn: document.querySelector('.btn'),
    firstName: document.querySelector('#firstname'),
    lastName: document.querySelector('#lastname'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

DOM.btn.addEventListener("click", function() {
    alert('btn clicked');
    if (DOM.firstName.value === '') {
        const errorText = 'Please Enter your First Name';
        displayError(errorText, DOM.firstName);
    } if (DOM.lastName.value === '') {
        const errorText = 'Please Enter your Last Name';
        displayError(errorText, DOM.lastName);
    } if (DOM.email.value === '') {
        const errorText = 'Please Enter your Email Address';
        displayError(errorText, DOM.email);
    } if (DOM.password.value.length < 6) {
        const errorText = 'Please Enter a Password its length be greater than 6';
        displayError(errorText, DOM.password);
    }
});

function displayError(text, eleAfter) {
    const ele = document.createElement('p');
    ele.innerHTML = text;
    ele.style.color = 'red';
    eleAfter.insertAdjacentElement('afterend', ele);
}