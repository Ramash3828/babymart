// toggle menu

let bar = document.getElementsByClassName("toggle-btn")[0];
const close = document.getElementsByClassName("close")[0];
const menu = document.getElementsByClassName("toggle__menu")[0];

bar.addEventListener("click", function () {
	if (menu.style.left == "0px") {
		menu.style.left = "-200px";
	} else {
		menu.style.left = "0px";
	}
});

close.addEventListener("click", function () {
	menu.style.left = "-200px";
});

// Acordion --------------------------------------------------------
const accordion = document.querySelectorAll(".angle-down");
const text = document.querySelectorAll(
	".supports__choose-1-text, .supports__choose-2-text, .supports__choose-3-text"
);

function showAccordion(e) {
	const textItem = document.querySelector(`.${this.id}-text`);
	accordion.forEach((item) => (item.style.transform = "rotate(0deg)"));
	if (textItem.classList[1] == "supports__choose--active") {
		heidAccrodion();
	} else {
		heidAccrodion();
		textItem.classList.add("supports__choose--active");
		this.style.transform = "rotate(180deg)";
	}
}

function heidAccrodion() {
	text.forEach((item) => item.classList.remove("supports__choose--active"));
}

accordion.forEach((item) => item.addEventListener("click", showAccordion));

// Banner slider ---------------------------------------------------------------

var swiper = new Swiper(".banner", {
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Popular Card slider------------------------------------------------------------------------------------
var swiper = new Swiper(".card__slider", {
	slidesPerView: 3,
	spaceBetween: 20,
	grabCurser: true,
	breakpointsBase: "window",
	centerSlider: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		loop: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 3,
		},
	},
});
