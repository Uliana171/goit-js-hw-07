const categoriesEl = document.querySelectorAll(".item");
console.log(categoriesEl);   

const itemEl = document.querySelector("#categories");
// console.log(itemEl);

const firstItemEl = itemEl.firstElementChild;
console.log('1', firstItemEl);
console.log('Категория:', firstItemEl.firstElementChild.textContent);
console.log('Количество элементов:', firstItemEl.querySelectorAll('li').length);

const secondItemEl = firstItemEl.nextElementSibling;
console.log('2', secondItemEl);
console.log('Категория:', secondItemEl.firstElementChild.textContent);
console.log('Количество элементов:', secondItemEl.querySelectorAll('li').length);


const thirdItemEl = itemEl.lastElementChild;
console.log('3',thirdItemEl);
console.log('Категория:', thirdItemEl.firstElementChild.textContent);
console.log('Количество элементов:', thirdItemEl.querySelectorAll('li').length);

