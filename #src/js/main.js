window.onload = function () {
	document.body.classList.add('loaded');
}

//плавный скролл header

$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
});

//активное меню при скролле

let sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	let cur_pos = $(this).scrollTop();

	sections.each(function () {
		let top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');

			$(this).addClass('active');
			nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
		}
	});
});

nav.find('a').on('click', function () {
	let $el = $(this)
		, id = $el.attr('href');

	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 500);

	return false;
});

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
let navLink = document.querySelectorAll('.navigation__link');

btnBurger.addEventListener('click', function () {
	btnBurger.classList.toggle('active');
	burgerNav.classList.toggle('active');
	body.classList.toggle('lock');
});

for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener('click', function () {
		btnBurger.classList.remove('active');
		burgerNav.classList.remove('active');
		body.classList.remove('lock');
	})
};


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

let musicList = document.querySelectorAll('.play');

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

	for (let i = 0; i < musicList.length; i++) {
		if (musicList[i] != this) {
			musicList[i].classList.remove('start');

			let parentOff = musicList[i].parentNode;
			parentOff.classList.remove('play-song');

			let idOff = musicList[i].getAttribute('id').replace(/btn/, '');

			let soundOff = document.querySelector(`#sound${idOff}`);

			if (musicList[i].classList.contains('start')) {
				soundOff.play();
			} else {
				soundOff.pause();
			}
		}
	}
};

for (let i = 0; i < musicList.length; i++) {
	musicList[i].addEventListener('click', playSong)
};

//сортировка соц.сетей	

let listSort = document.querySelector('.wr-social__btn-list');
let btnSort = document.querySelectorAll('.wr-social__btn');
let postSort = document.querySelectorAll('.networks__container')

listSort.addEventListener('click', function () {
	let target = event.target;

	if (target.tagName != 'BUTTON') return;
	showPost(target);
})

function showPost(target) {
	let id = target.getAttribute('id').replace(/btn-/, '');
	let post = document.querySelector(`.${id}`);

	for (let i = 0; i < postSort.length; i++) {
		postSort[i].classList.remove('disabled');
	}

	if (target.classList.contains('active')) return;

	for (let i = 0; i < btnSort.length; i++) {
		btnSort[i].classList.remove('active');
	}
	target.classList.add('active');

	if (target.classList.contains('all')) return;

	for (let i = 0; i < postSort.length; i++) {
		if (post != postSort[i]) {
			postSort[i].classList.add('disabled');
		}
	}
};

//аккордион + табы

let spoiler = document.querySelectorAll('.spoiler__item');
let contentList = document.querySelectorAll('.content');

for (let i = 0; i < spoiler.length; i++) {
	spoiler[i].addEventListener('click', function () {
		let target = spoiler[i];
		target.classList.toggle('active');
		for (let i = 0; i < spoiler.length; i++) {
			if (target != spoiler[i]) {
				spoiler[i].classList.remove('active');
			};
		}
		let id = target.getAttribute('id').replace(/spoiler-/, 'content-');
		let content = document.querySelector(`#${id}`);
		for (let i = 0; i < contentList.length; i++) {
			contentList[i].classList.remove('active');
		}
		for (let i = 0; i < contentList.length; i++) {
			if (content == contentList[i]) contentList[i].classList.add('active');
		}
	});
}

// валидация формы
let inputList = document.querySelectorAll('input');
let btnSubmit = document.querySelector('.form__btn');

btnSubmit.addEventListener('click', function () {
	for (let i = 0; i < inputList.length; i++) {
		inputList[i].classList.remove('error');
		if (!inputList[i].value) {
			inputList[i].classList.add('error')
		}
	}
});
