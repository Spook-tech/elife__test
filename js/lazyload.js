"use strict"

const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
	if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
		lazyScrollCheck();
	}
	if (!loadMapBlock) return;
	if (!loadMapBlock.classList.contains('_loaded')) {
		getMap();
	}
}

lazyScroll();

function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}


function getMap() {
	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadMapBlockPos - windowHeight) {
		const loadMapUrl = loadMapBlock.dataset.map;
		if (loadMapUrl) {
			loadMapBlock.insertAdjacentHTML(
				"beforeend",
				`<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
			);
			loadMapBlock.classList.add('_loaded');
		}
	}
}


import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.3/photoswipe-lightbox.esm.min.js';
const options = {
  //Any element with this class will become an individual gallery
  gallery: '.gallery',   
  // Your slides will be every <a> tag that is children from .gallery-js
  children: '.gallery__item a',
// This module will only load when you click to show the images, making your data bundle lighter
pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.3/photoswipe.esm.min.js')
};
                
const lightbox = new PhotoSwipeLightbox(options);
        
lightbox.init();
