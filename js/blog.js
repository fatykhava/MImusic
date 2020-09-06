window.onload = function () {
	document.body.classList.add('loaded');
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