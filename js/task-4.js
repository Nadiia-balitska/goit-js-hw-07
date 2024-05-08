const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('.email-input');
const inputPasEl = document.querySelector('.pas-input');

formEl.addEventListener('submit', e => {
    e.preventDefault();

    const inputEmailEl = e.currentTarget.elements.email;
    const inputPasEl = e.currentTarget.elements.password;

    if (!inputEmailEl.value.trim() || !inputPasEl.value.trim()) {
        return alert('All form fields must be filled in');
    }
    
    const userInfo = {
        email: inputEmailEl.value,
        password: inputPasEl.value
    };
    console.log(userInfo);
    e.currentTarget.reset();

});

// inputEmailEl.addEventListener('')

