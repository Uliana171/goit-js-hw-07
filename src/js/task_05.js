const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
    
};

refs.inputEl.addEventListener('input', onInputChange);

const spanText = refs.outputEl.textContent;

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        refs.outputEl.textContent = spanText;
        return
    }
    refs.outputEl.textContent = event.currentTarget.value;
};













// NB!

// refs.inputEl.addEventListener('focus', onInputFocus);
// refs.inputEl.addEventListener('blur', onInputBlur);
// function onInputFocus(event) {
//     console.log('1', event.currentTarget.value);
// };
// function onInputBlur(event) {
//     console.log('2', event.currentTarget.value); 
// };

// NB!