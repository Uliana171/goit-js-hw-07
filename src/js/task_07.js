const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


inputEl.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});
