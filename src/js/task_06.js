const inputEl = document.querySelector('#validation-input');
// const inputLength = document.querySelector('[data-length="6"]');
const inputLength = inputEl.getAttribute('data-length');

// console.log(inputLength);

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue.length);

    if (inputValue.length < inputLength) {
        event.currentTarget.classList.add("invalid");
    }
    event.currentTarget.classList.add("valid");
    
};

function onInputFocus(event) {
    event.currentTarget.classList.remove("valid", "invalid");
};

