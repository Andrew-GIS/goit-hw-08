import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInputListener, 500));
form.addEventListener('submit', onFormSubmitListener);

onFormShowResult();

function valueEmail() {
	return {
		email: form.email.value
	}
}

function valueMassage() {
	return {
		email: form.message.value
	}
}

function onFormInputListener() {
	const email = valueEmail();
	const message = valueMassage();
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify( email, message ));

	// console.log('email IN INPUT :>> ', email);
	// console.log('message IN INPUT :>> ', message);
}

function onFormSubmitListener(event) {
	event.preventDefault();
	
	if (form.elements.email.value || form.elements.message.value) {
		const email = valueEmail();
		const message = valueMassage();
		console.log('email SUBMITED:>> ', email);
		console.log('message SUBMITED:>> ', message);
		event.currentTarget.reset();
		localStorage.removeItem(LOCALSTORAGE_KEY);
	}
}

function onFormShowResult() {
	const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
	if (savedMessage) {
		const inputFill = JSON.parse(savedMessage);
		form.email.value = inputFill.email;
		form.message.value = inputFill.message;
	}
}