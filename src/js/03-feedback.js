import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmitListener);
form.addEventListener('input', throttle(onFormInputListener, 500));

onFormShowResult();

function setFields() {
     return {
        email: form.email.value,
        message: form.message.value,
        };
}
	
function onFormInputListener() {
    const fields = setFields();
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fields));
		// console.log('email IN INPUT :>> ', fields.email);
		// console.log('message IN INPUT :>> ', fields.message);
}

function onFormSubmitListener(event) {
    event.preventDefault();
    if (form.elements.email.value && form.elements.message.value) {
        console.log(setFields())
        event.currentTarget.reset();
    	localStorage.removeItem(LOCALSTORAGE_KEY);
    } 
}

function onFormShowResult() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY)
    if (savedMessage) {
        const inputFill = JSON.parse(savedMessage);
        form.email.value = inputFill.email;
        form.message.value = inputFill.message;
 }
}



// onFormShowResult();

// function valueEmail() {
// 	return {
// 		email: form.email.value
// 	}
// }

// function valueMassage() {
// 	return {
// 		message: form.message.value,
// 	}
// }

// function setFields() {
// 	return {
// 		email: form.email.value,
// 		message: form.message.value,
// 	}
	
// }

// function onFormInputListener() {
// 	const fields = setFields();
// 	// const email = valueEmail();
// 	// const message = valueMassage();
// 	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(`${fields}`));

// 	// console.log('email IN INPUT :>> ', email);
// 	// console.log('message IN INPUT :>> ', message);
// }

// function onFormSubmitListener(event) {
// 	event.preventDefault();
	
// 	if (form.elements.email.value && form.elements.message.value) {
// 		const email = valueEmail();
// 		const message = valueMassage();
// 		console.log('email SUBMITED:>> ', email);
// 		console.log('message SUBMITED:>> ', message);
// 		event.currentTarget.reset();
// 		localStorage.removeItem(LOCALSTORAGE_KEY);
// 	}
// }

// function onFormShowResult() {
// 	const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
// 	if (savedMessage) {
// 		const inputFill = JSON.parse(savedMessage);
// 		form.elements.email.value = inputFill.email;
// 		form.elements.message.value = inputFill.message;
// 	}
// }