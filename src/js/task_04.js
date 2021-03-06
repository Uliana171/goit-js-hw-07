const counter = {
    value: 0,
    increment() {
        console.log('increment => this', this);
        this.value += 1;
    },
    decrement() {
        console.log('increment => this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue);

decrementBtn.addEventListener('click', function () {
    // console.log('klik na dekrement');
    counter.decrement();
    console.log(counter); 
    
    counterValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
   
    counter.increment();
    console.log(counter);

    counterValue.textContent = counter.value;
});