const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
console.log(galleryEl);

// const itemEl = document.createElement('li');
// const imgEl = document.createElement('img');
// itemEl.append(imgEl);
// console.log(itemEl);

const items = [];

// for (let index = 0; index < images.length; index++) {
//   const image = images[index];
//   const src = `${image.url}`; 
//   const alt = image.alt;
//   const itemEl = `<div><img srs = "${src}" alt = "${alt}" loading = "lazy" width= "600"></img></div>`;
//   items.push(itemEl);
// }
// galleryEl.insertAdjacentHTML('beforeend', items.join(''));
// console.log();



images.forEach(image => {
  const src = image.url; 
  const alt = image.alt;
  const itemEl = `<li><img srs = "${src}" alt = "${alt}" width= "600"></img></li>`;
  items.push(itemEl);
});

galleryEl.insertAdjacentHTML('beforeend', items.join(''));







// const items = [];









// const createElement = (images => {
//   images.forEach(image => {
//     const { url, alt = image };

//     const itemEl = document.createElement('li');
//     const imgEl = document.createElement('img');

//     imgEl.src = `${url}`;
//     imgEl.alt = `${alt}`;
//     console.log(imgEl);
  
//     itemEl.insertAdjacentHTML("beforeend", imgEl)

//     items.push(itemEl);
//     itemEl.classList.add('item');
//   });

// });

// createElement(images);
// galleryEl.prepend(...items);
// galleryEl.classList.add('gallery');


// galleryEl.insertAdjacentHTML("beforeend", items.join(''));

// const imgItemEl = document.createElement('li');
// const imgEl = document.createElement('img');
// console.log(imgEl);

// for (let i = 0; i < images.length; i++) {
//   const src = images[i].url;
//   const alt = images[i].alt;
//   const itemEl = `<li><div><img src="$(src)" alt = "$(alt)" loading = "lazy"/></div></li>`;
// }
// console.log(itemEl);

