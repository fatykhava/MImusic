window.onload = function () {
	document.body.classList.add('loaded');
}

//сортировка концертов
debugger
let listSort = document.querySelector('.concert__btn-list');
let btnSort = document.querySelectorAll('.concert__btn');
let itemSort = document.querySelectorAll('.concert__item')

listSort.addEventListener('click', function () {
	let target = event.target;

	if (target.tagName != 'BUTTON') return;
	showConcert(target);
})

function showConcert(target) {
	let id = target.getAttribute('id').replace(/btn-/, '');
	let region = document.querySelector(`.${id}`);

	for (let i = 0; i < itemSort.length; i++) {
		itemSort[i].classList.remove('disabled');
	}

	if (target.classList.contains('active')) return;

	for (let i = 0; i < btnSort.length; i++) {
		btnSort[i].classList.remove('active');
	}
	target.classList.add('active');

	if (target.classList.contains('btn-world')) return;

	for (let i = 0; i < itemSort.length; i++) {
		if (region != itemSort[i]) {
			itemSort[i].classList.add('disabled');
		}
	}
};