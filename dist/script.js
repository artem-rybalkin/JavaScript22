'use strict';

$(function () {
	// создали объект с вопросами

	var question = { answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3' };

	//записали в локальное хранилище вопросы

	localStorage.setItem('ques', JSON.stringify(question));

	//вычитываем из хранилища вопросы

	var objects = localStorage.getItem('ques');

	var _JSON$parse = JSON.parse(objects);

	var answer1 = _JSON$parse.answer1;
	var answer2 = _JSON$parse.answer2;
	var answer3 = _JSON$parse.answer3;
	//вставляем на страницу

	for (var i = 1; i < 4; i++) {
		$('#der').append('<h3>\u0412\u043E\u043F\u0440\u043E\u0441\u2116' + i + '</h3><label><input type="radio" name="name' + i + '" id="a1">' + answer1 + '</label><label><input type="radio" name="name' + i + '" id="a2">' + answer2 + '</label><label><input type="radio" name="name' + i + '" id="a3">' + answer3 + '</label>');
	}

	// создаём объект с ответами

	var rightAnswer = ['a1', 'a2', 'a3'];
	// записали в локальное хранилище ответы
	localStorage.setItem('answ', JSON.stringify(rightAnswer));
	//вычитываем из хранилища ответы
	rightAnswer = JSON.parse(localStorage.getItem('answ'));

	// выполнение при нажатии на конпку
	$('#button').on('click', function () {
		// записываем id всех выбраных чекбоксов в массив
		var checked = [];
		$("input:radio:checked").each(function () {
			checked.push($(this).attr('id'));
		});
		// проверяем, если не выбран ни один пункт
		if (checked.length < 3) {
			Modale('Выберите ответ');
			return false;
		}
		// проверяем количество правильных ответов

		var count = 0;
		for (var i = 0; i < checked.length; i++) {
			if (checked[i] == rightAnswer[i]) {
				count += 1;
			} else {
				Modale('Ответ не верный!');
				break;
			}
		}
		if (count == 3) {
			Modale('Ответ правильный!');
		}
		// сбрасываем выбраные чекбоксы
		$("input:radio:checked").attr('checked', false);
	});
});