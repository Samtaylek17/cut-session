function setFormMessage(formElement: Element | null, type: string, message: string) {
	const messageElement = formElement!.querySelector('.form__message');

	messageElement!.textContent = message;
	messageElement!.classList.remove('form__message--success', 'form__message--error');
	messageElement!.classList.add(`form__message--${type}`);
}

function setInputError(inputElement: Element, message: string) {
	inputElement!.classList.add('text-red-500');
	inputElement!.parentElement!.querySelector('.form__input-error-message')!.textContent = message;
}

function clearInputError(inputElement: Element) {
	inputElement!.classList.remove('text-red-500');
	inputElement!.parentElement!.querySelector('.form__input-error-message')!.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
	const userForm = document.querySelector('#userForm');
	const merchantForm = document.querySelector('#merchantForm');

	document.querySelector('.link-merchant')!.addEventListener('click', (e) => {
		e.preventDefault();
		userForm!.classList.add('hidden');
		merchantForm!.classList.remove('hidden');
	});

	document.querySelector('.link-user')!.addEventListener('click', (e) => {
		e.preventDefault();
		userForm!.classList.remove('hidden');
		merchantForm!.classList.add('hidden');
	});

	userForm!.addEventListener('submit', (e) => {
		e.preventDefault();

		const name = (<HTMLInputElement>document.querySelector('#name'))!.value;
		const email = (<HTMLInputElement>document.querySelector('#email'))!.value;
		const dob = (<HTMLInputElement>document.querySelector('#date'))!.value;
		const cityOfResidence = (<HTMLInputElement>document.querySelector('#city'))!.value;
		const phoneNumber = (<HTMLInputElement>document.querySelector('#phone'))!.value;
		const username = (<HTMLInputElement>document.querySelector('#username'))!.value;
		const password = (<HTMLInputElement>document.querySelector('#password'))!.value;
		const metadata = {};

		const data = { name, email, dob, cityOfResidence, phoneNumber, username, password, metadata };

		// Perform your Fetch signup
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};

		fetch('https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/register/users', options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => {
				console.log(err);
				setFormMessage(userForm, 'error', err.response.message);
			});
	});

	merchantForm!.addEventListener('submit', (e) => {
		e.preventDefault();

		const name = (<HTMLInputElement>document.querySelector('#merchant-name'))!.value;
		const email = (<HTMLInputElement>document.querySelector('#merchant-email'))!.value;
		const cityOfOperation = (<HTMLInputElement>document.querySelector('#merchant-city'))!.value;
		const phoneNumber = (<HTMLInputElement>document.querySelector('#merchant-phone'))!.value;
		const username = (<HTMLInputElement>document.querySelector('#merchant-username'))!.value;
		const password = (<HTMLInputElement>document.querySelector('#merchant-password'))!.value;
		const metadata = {};

		const data = { name, email, cityOfOperation, phoneNumber, username, password, metadata };

		// Perform your Fetch signup
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};

		fetch('https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/register/merchants', options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => {
				console.log(err);
				setFormMessage(userForm, 'error', err.response.message);
			});
	});

	document.querySelectorAll('.form__input').forEach((inputElement: any) => {
		inputElement.addEventListener('blur', (e: any) => {
			if (e!.target!.id === 'password' && e!.target?.value!.length > 0 && e.target.value.length < 8) {
				setInputError(inputElement, 'Password must be at least 8 characters in length');
			}
		});

		inputElement.addEventListener('input', (e: any) => {
			clearInputError(inputElement);
		});
	});
});
