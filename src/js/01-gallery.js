// Add imports above this lineimport
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', getClick(galleryItems));
galleryList.addEventListener('click', getImages);

function getClick(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) => `
    
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     /></a>
</li>
 `
    )
    .join('');
}
console.log('Nata');
function getImages(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  } else {
    const instance = SimpleLightbox.create(
      `
        <img src="${event.target.dataset.source}" width="250px" height="250px">
    `
    );
    instance.show();
  }
}

console.log(galleryItems);
