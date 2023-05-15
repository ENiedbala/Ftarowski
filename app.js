const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navi');
const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
	nav.classList.toggle('navi--active');
};

hamburger.addEventListener('click', handleClick);
