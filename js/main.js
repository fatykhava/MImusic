'use strict';

function Tabs() {
	var bindAll = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].addEventListener('click', change, false);
		}
	}

	var clear = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].classList.remove('active');
			var id = menuElements[i].getAttribute('data-tab');
			document.getElementById(id).classList.remove('active');
		}
	}

	var change = function (e) {
		clear();
		e.target.classList.add('active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('active');
	}

	bindAll();
}

var connectTabs = new Tabs();

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__wr-nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

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
				breakpoint: 500,
				settings: {
					dots: false,
				}
			}],
	})
});


$(".spoiler__wr-title").click(function (event) {
	if ($(".wr-blog__spoiler").hasClass("accordion")) {
		$(".spoiler__wr-title").not($(this)).removeClass("active");
		$(".spoiler__text").not($(this).next()).slideUp(400);
	}
	$(this).toggleClass("active").next().slideToggle(400);
});

$('.play').click(function () {
	var $this = $(this);
	var id = $this.attr('id').replace(/btn/, '');
	$this.toggleClass('active');
	if ($this.hasClass('active')) {
		$('audio[id^="sound"]')[id - 1].play();
	} else {
		$('audio[id^="sound"]')[id - 1].pause();
	}
});