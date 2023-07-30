// Продолжение JavaScript
// Урок 8. Семинар. Работа с событиями
// Обязательное задание.
// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

// <input id="from" type="text">
// В инпуте написано: <span></span>

// <br>

// <button class="messageBtn">Показать блок</button>
// <div class="message">
//   Привет :)
// </div>

// <br>

// <form>
//   <label>
//     Первый инпут:
//     <input class="form-control" type="text">
//   </label>
//   <br>
//   <br>
//   <label>
//     Второй инпут:
//     <select class="form-control">
//       <option value=""></option>
//       <option value="1">Один</option>
//       <option value="2">Два</option>
//     </select>
//   </label>
//   <br>
//   <br>
//   <button>Отправить</button>
// </form>

// <script>
//   "use strict";


// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.


function changeSpanValue(value) {
	document.getElementById("span").innerText = value;
}

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

document.querySelector('.messageBtn').addEventListener('click', function () {
	var message = document.querySelector('.message');
	message.classList.add('animate_animated', 'animate_fadeInLeftBig');
	message.style.visibility = 'visible';
});
// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.



const form = document.querySelector('form');
const inputs = form.querySelectorAll('.form-control');


function checkField(field) {
	field.classList.remove('error');
	if (field.value.trim() === '') {
		field.classList.add('error');
	}
}


form.addEventListener('submit', function (event) {
	let formIsValid = true;
	inputs.forEach(function (input) {
		checkField(input);
		if (input.classList.contains('error')) {
			formIsValid = false;
		}
	});
	if (!formIsValid) {
		event.preventDefault();
	}
});


inputs.forEach(function (input) {
	input.addEventListener('input', function () {
		checkField(input);
	});
});