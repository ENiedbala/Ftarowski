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

// restaurant menu Photo of the dish
const menuWrap = document.querySelector('.dishPhotoWrapper');
const startersPosition = document.querySelectorAll('.startersPosition');
const StarterPhoto = document.querySelector('.photoActive');
const dishPhotoNumber = document.querySelector('.startersPhoto1');
const closePhotoWraper = document.querySelector('.closePhotoWraper');
startersPosition.forEach(function (item) {
	let currentNumber;
	let newNumber = currentNumber;
	item.addEventListener('click', e => {
		menuWrap.classList.add('activeWraper');

		const showdishPhoto = currentNumber => {
			document.querySelector('.photoActive').classList.remove('photoActive');
			document
				.querySelector('.startersPhoto' + currentNumber)
				.classList.add('photoActive');
		};
		if (e.currentTarget.classList.contains('starter' + 1)) {
			showdishPhoto(1);
		}
		if (e.currentTarget.classList.contains('starter' + 2)) {
			showdishPhoto(2);
		}
		if (e.currentTarget.classList.contains('starter' + 3)) {
			showdishPhoto(3);
		}
		if (e.currentTarget.classList.contains('starter' + 4)) {
			showdishPhoto(4);
		}
		if (e.currentTarget.classList.contains('starter' + 5)) {
			showdishPhoto(5);
		}
		if (e.currentTarget.classList.contains('starter' + 6)) {
			showdishPhoto(6);
		}
		if (e.currentTarget.classList.contains('starter' + 7)) {
			showdishPhoto(7);
		}
		if (e.currentTarget.classList.contains('starter' + 8)) {
			showdishPhoto(8);
		}
		if (e.currentTarget.classList.contains('starter' + 9)) {
			showdishPhoto(9);
		}
		if (e.currentTarget.classList.contains('starter' + 10)) {
			showdishPhoto(10);
		}
		if (e.currentTarget.classList.contains('starter' + 11)) {
			showdishPhoto(11);
		}
		if (e.currentTarget.classList.contains('starter' + 12)) {
			showdishPhoto(12);
		}
		if (e.currentTarget.classList.contains('starter' + 13)) {
			showdishPhoto(13);
		}
	});
	closePhotoWraper.addEventListener('click', () => {
		menuWrap.classList.remove('activeWraper');
	});
});
