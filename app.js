// menu active to change size
const hamburger = document.querySelector('.hamburger');
const menu_list = document.querySelector('.menu_list');
const handleClick = () => {
	hamburger.classList.toggle('hamburger--active');
	menu_list.classList.toggle('menu_list--active');
};
hamburger.addEventListener('click', handleClick);

// First side main gallery

let currentNumber = 1;

function showSlide(Number) {
	document.querySelector('.mainActive').classList.remove('mainActive');
	document.querySelector('#photo' + Number).classList.add('mainActive');
	document.querySelector('.selectDot').classList.remove('selectDot');
	document.querySelector('#dot' + Number).classList.add('selectDot');
}
function showSlide1() {
	showSlide(1);
}
function showSlide2() {
	showSlide(2);
}
function showSlide3() {
	showSlide(3);
}

for (let numerPinu = 1; numerPinu <= 3; numerPinu++) {
	document
		.querySelector('#dot' + numerPinu)
		.addEventListener('click', function () {
			showSlide(numerPinu);
		});
}

function showNextSlide() {
	let newNumber = currentNumber++;

	if (currentNumber > 3) {
		currentNumber = 1;
	}
	console.log(currentNumber);
	showSlide(newNumber);
}

setInterval(showNextSlide, 5000);
