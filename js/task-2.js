// const gallery = document.createElement('ul');
// gallery.classList.add('list');
// const item = document.createElement('li');
// item.classList.add('list-item');
// gallery.appendChild(item);
// const image = document.createElement('img');
// item.appendChild(image);




// item.append(gallery);
// image.appendChild(item);


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const makeGallery = document.querySelector('.gallery');


function markup(array) {
  return array
    .map(i => `<li class = 'list-item'><div class ='gallery-wrapper'><img class = 'img-task2' src='${i.url}' alt = '${i.alt}'/></div> </li>`)
    .join('');
}
// const div = document.createElement('div');
// div.classList.add('list-wrapper');
// div.appendChild();

// const imageEl = document.querySelector('li');
// imageEl.classList.add('list-item');
makeGallery.insertAdjacentHTML("beforeend", markup(images));

