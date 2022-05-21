import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

const gallery = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemMarkup);
gallery.addEventListener('click', onGalleryItemClick);


function createGalleryMarkup(items) {
	return items.map(item => {
		 return `
		<a class="gallery__item" href="${item.original}">
  			<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
		</a>`
	}).join("");
}

function onGalleryItemClick(event) {
	event.preventDefault();
	const galleryImageElement = event.target.classList.contains("gallery__image");
	if (!galleryImageElement) {
		console.log("return: Click on the image - you clicked on the non-image field");
		return;
	}
	else {
		new SimpleLightbox('.gallery a', {
			captionsData: "alt",
			captionDelay: 250,	
		});
		
	}
}