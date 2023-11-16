// Add imports above this lineimport
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', getClick(galleryItems));

function getClick(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) => `
    
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      /></a>
</li>
 `
    )
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryList);
