// menu active to change size
const hamburger = document.querySelector('.hamburger');
const menu_list = document.querySelector('.menu_list');
const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
	menu_list.classList.toggle('menu_list--active');
};
hamburger.addEventListener('click', handleClick);

(async () =>
	// async IIFE code for slider.
	{
		const interval = 1500, // ms
			paddingRight = 10,
			slideContainer = document.querySelector('.wrapper'),
			slidesWrapper = document.querySelector('.carousellWrapper'),
			slides = document.querySelectorAll('.carousellSlide'),
			delay = ms => new Promise(r => setTimeout(r, ms)),
			movLeft = (el, mov) =>
				new Promise(r => {
					el.ontransitionend = _ => {
						el.ontransitionend = null;
						el.style.transition = 'none';
						r();
					};
					el.style.transition = '2s';
					el.style.transform = `translateX(${-mov}px)`;
				});

		let index = 0;

		while (true) {
			// infinite carrousel loop
			await delay(interval);
			await movLeft(slidesWrapper, slides[index].clientWidth + paddingRight);

			slidesWrapper.appendChild(slides[index]); // mov first slide to the end
			slidesWrapper.style.transform = `translateX(0)`; // rest translateX
			index = ++index % slides.length;
		}
	})();

const Position = document.querySelectorAll('.menuPosition');
const Photo = document.querySelectorAll('.Photo');

for (let i = 0; i < Position.length; i++) {
	Position[i].addEventListener('click', e => {
		for (let a = 0; a < Photo.length; a++) {
			Photo[i].classList.toggle('Photoactive');
		}
	});
}

const galleryImages = document.querySelectorAll('.photoGallery img');
const popup = document.querySelector('.popup');
const popup__close = document.querySelector('.popup__close');
const popup__img = document.querySelector('.popup__img');
const Gallery_LeftArrow = document.querySelector('.gallery__leftArrow');
const Gallery_RightArrow = document.querySelector('.gallery__rightArrow');
let CurrentIndex;
const ShowNextImg = () => {
	if (CurrentIndex === galleryImages.length - 1) {
		CurrentIndex = 0;
	} else {
		CurrentIndex++;
	}
	popup__img.src = galleryImages[CurrentIndex].src;
};
const ShowPrevImg = () => {
	if (CurrentIndex === 0) {
		CurrentIndex = galleryImages.length - 1;
	} else {
		CurrentIndex--;
	}
	popup__img.src = galleryImages[CurrentIndex].src;
};
const CloseImg = () => {
	popup.classList.add('fade-Out');
	galleryImages.forEach(element => {
		element.setAttribute('tabindex', 1);
	});
	setTimeout(() => {
		popup.classList.add('hidden');
		popup.classList.remove('fade-Out');
	}, 300);
};

galleryImages.forEach((image, index) => {
	const ShowPopup = e => {
		popup.classList.remove('hidden');
		popup__img.src = e.target.src;
		CurrentIndex = index;
		galleryImages.forEach(element => {
			element.setAttribute('tabindex', -1);
		});
	};

	image.addEventListener('click', ShowPopup);
	image.addEventListener('keydown', e => {
		if (e.code === 'Enter' || e.keyCode === 13) {
			ShowPopup(e);
		}
	});
});
popup__close.addEventListener('click', CloseImg);
Gallery_LeftArrow.addEventListener('click', ShowPrevImg);
Gallery_RightArrow.addEventListener('click', ShowNextImg);

document.addEventListener('keydown', e => {
	if (!popup.classList.contains('hidden')) {
		if (e.code === 'ArrowRight' || e.keyCode === 39) {
			ShowNextImg();
		}
		if (e.code === 'ArrowLeft' || e.keyCode === 37) {
			ShowPrevImg();
		}
		if (e.code === 'Escape' || e.keyCode === 27) {
			CloseImg();
		}
	}
});
