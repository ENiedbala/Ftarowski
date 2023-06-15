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
