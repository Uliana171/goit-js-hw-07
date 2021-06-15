const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');
const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('ingredients__item');
  itemEl.textContent = ingredient;

  return itemEl
});
console.log(elements);
ingredientsContainerEl.append(...elements);

