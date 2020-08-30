// slider main-page

$(document).ready(function () {
	$(".slider").slick({
		arrows: false,
		dots: true,
		speed: 500,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 10000,
		waitForAnimate: true,
		fade: true,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					dots: false,
				}
			}],
	})
});

//бургер-меню

let btnBurger = document.querySelector('.header__burger');
let burgerNav = document.querySelector('.header__wr-nav');
let body = document.querySelector('body');

btnBurger.addEventListener('click', function () {
	btnBurger.classList.toggle('active');
	burgerNav.classList.toggle('active');
	body.classList.toggle('lock');
});

// fixed header 

let header = document.querySelector('.header');

if (header) {
	window.onscroll = function () {
		if (document.documentElement.scrollTop > 590) {
			header.classList.add("header-fixed");
		}
		else {
			header.classList.remove("header-fixed");
		}
	}
}

// section album

// включение музыки

let playSong = function () {
	this.classList.toggle('start');
	let parent = this.parentNode;
	parent.classList.toggle('play-song');

	let id = this.getAttribute('id').replace(/btn/, '');

	let sound = document.querySelector(`#sound${id}`);

	if (this.classList.contains('start')) {
		sound.play();
	} else {
		sound.pause();
	}
};

let musicList = document.querySelectorAll('.play');
for (let i = 0; i < musicList.length; i++) {
	musicList[i].addEventListener('click', playSong)
};

//сортировка соц.сетей	

filterSelection("all")
function filterSelection(c) {
	let x, i;
	x = document.getElementsByClassName("networks__container");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
let btns = document.getElementsByClassName("wr-social__btn");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[i].className += " active";
	});
};

//

function Tabs() {
	let bindAll = function () {
		let menuElements = document.querySelectorAll('[data-tab]');
		for (let i = 0; i < menuElements.length; i++) {
			menuElements[i].addEventListener('click', change, false);
		}
	}

	let clear = function () {
		let menuElements = document.querySelectorAll('[data-tab]');
		for (let i = 0; i < menuElements.length; i++) {
			menuElements[i].classList.remove('active');
			let id = menuElements[i].getAttribute('data-tab');
			document.getElementById(id).classList.remove('active');
		}
	}

	let change = function (e) {
		clear();
		e.target.classList.add('active');
		let id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('active');
	}

	bindAll();
}

var connectTabs = new Tabs();

//аккордион

$(".spoiler__wr-title").click(function (event) {
	if ($(".wr-blog__spoiler").hasClass("accordion")) {
		$(".spoiler__wr-title").not($(this)).removeClass("active");
		$(".spoiler__text").not($(this).next()).slideUp(500);
	}
	$(this).toggleClass("active").next().slideToggle(500);
});
