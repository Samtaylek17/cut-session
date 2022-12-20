const regexPath = (path: string) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');
/* Checking if the current page is the login page. */
if (window.location.pathname.match(regexPath('/login'))) {
	/**
	 * "Set the form message element's text content to the message argument, remove the success and error
	 * classes from the message element, and add the type argument as a class to the message element."
	 *
	 * The function takes three arguments:
	 *
	 * formElement: The form element.
	 * type: The type of message.
	 * message: The message to display.
	 * The function uses the formElement argument to get the form message element. It then sets the
	 * message element's text content to the message argument
	 * @param {Element | null} formElement - The form element that we want to set the message for.
	 * @param {string} type - The type of message to display. This can be either 'success' or 'error'.
	 * @param {any} message - The message to display.
	 */
	function setFormMessage(formElement: Element | null, type: string, message: any) {
		const messageElement = formElement!.querySelector('.form__message');

		messageElement!.textContent = message;

		messageElement!.classList.remove('form__message--success', 'form__message--error');
		messageElement!.classList.add(`form__message--${type}`);
	}

	/**
	 * It adds a class to an input element and sets the text content of an element.
	 * @param inputElement - {
	 * @param {any} message - string
	 */
	function setInputError(
		inputElement: {
			classList: { add: (arg0: string) => void };
			parentElement: { querySelector: (arg0: string) => { (): any; new (): any; textContent: any } };
		},
		message: any
		/* It's an array of objects that contain the path and the view. */
	) {
		inputElement.classList.add('text-red-500');
		inputElement.parentElement.querySelector('.form__input-error-message').textContent = message;
	}

	/**
	 * It removes the red border and error message from an input element
	 * @param {Element} inputElement - The input element that we want to clear the error message from.
	 */
	function clearInputError(inputElement: Element) {
		inputElement!.classList.remove('text-red-500');
		inputElement!.parentElement!.querySelector('.form__input-error-message')!.textContent = '';
	}

	document.addEventListener('DOMContentLoaded', () => {
		const loginForm = document.querySelector('#loginForm');

		/* The above code is a login form that is using the fetch API to send a POST request to the server. */
		loginForm!.addEventListener('submit', (e) => {
			e.preventDefault();

			const username = (<HTMLInputElement>document.querySelector('#username'))!.value;
			const password = (<HTMLInputElement>document.querySelector('#password'))!.value;
			const accessType = (<HTMLInputElement>document.querySelector('input[name="accessType"]:checked'))!.value;

			console.log(accessType);
			const data = { username, password, accessType };

			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Prefer: 'code=200, dynamic=true' },
				body: JSON.stringify(data),
			};

			fetch('https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/sign-in', options)
				.then((response) => response.json())
				.then((response) => {
					if (response.token) {
						const userData = JSON.stringify({ accessType, ...response });
						window.localStorage.setItem('user', userData);
						const url = new URL(window.location.href);
						if (accessType === 'USER') {
							const nextRoute = url.searchParams.get('redirect') || '/user';
							window.location.replace(nextRoute);
						} else {
							const nextRoute = url.searchParams.get('redirect') || '/merchant';
							window.location.replace(nextRoute);
						}
					} else {
						setFormMessage(loginForm, 'error', response.message);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
	});
}

/* The above code is a TypeScript implementation of the signup form. */
if (window.location.pathname.match(regexPath('/signup'))) {
	function setFormMessage(formElement: Element | null, type: string, message: string) {
		const messageElement = formElement!.querySelector('.form__message');

		messageElement!.textContent = message;
		messageElement!.classList.remove('form__message--success', 'form__message--error');
		messageElement!.classList.add(`form__message--${type}`);
	}

	function setInputError(inputElement: Element, message: string) {
		inputElement!.classList.add('text-red-500', 'form__input--error');
		inputElement!.parentElement!.querySelector('.form__input-error-message')!.textContent = message;
	}

	function clearInputError(inputElement: Element) {
		inputElement!.classList.remove('text-red-500', 'form__input--error');
		inputElement!.parentElement!.querySelector('.form__input-error-message')!.textContent = '';
	}

	document.addEventListener('DOMContentLoaded', () => {
		const userForm = <HTMLFormElement>document.querySelector('#register');

		const phoneNumber = document.querySelector('#phone');

		phoneNumber!.addEventListener('input', (event: any) => {
			const newValue = event!.target!.value.replace(new RegExp(/[^\d]/, 'ig'), '');
			event!.target!.value = newValue;
		});

		const accessTypes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="accessType"]');

		let accessType: HTMLInputElement;

		for (accessType of accessTypes) {
			accessType.addEventListener('change', (event) => {
				if (accessType.value === 'MERCHANT') {
					document.querySelector('#dob-container')!.classList.add('hidden');
					document.querySelector('#form-title')!.innerHTML = 'Merchant Signup';
				} else {
					document.querySelector('#dob-container')!.classList.remove('hidden');
					document.querySelector('#form-title')!.innerHTML = 'User Signup';
				}
			});
		}

		userForm!.addEventListener('submit', (e) => {
			e.preventDefault();

			const name = (<HTMLInputElement>document.querySelector('#name'))!.value;
			const email = (<HTMLInputElement>document.querySelector('#email'))!.value;
			const city = (<HTMLInputElement>document.querySelector('#city'))!.value;
			const phoneNumber = (<HTMLInputElement>document.querySelector('#phone'))!.value;
			const dob = (<HTMLInputElement>document.querySelector('#date'))!.value;
			const username = (<HTMLInputElement>document.querySelector('#username'))!.value;
			const password = (<HTMLInputElement>document.querySelector('#password'))!.value;
			const userType = (<HTMLInputElement>document.querySelector('input[name="accessType"]:checked'))!.value;
			const metadata = {};

			document.querySelectorAll('.form__input').forEach((inputElement: any) => {
				if (inputElement.value.length === 0) {
					setInputError(inputElement, 'Required');
				}
			});

			if (userType === 'USER') {
				const data = { name, email, cityOfResidence: city, dob, phoneNumber, username, password, metadata };

				// Perform your Fetch signup
				const options = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				};

				fetch('https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/register/users', options)
					.then((response) => response.json())
					.then((response) => {
						setFormMessage(userForm, 'error', response.message);
					})
					.catch((err) => {
						console.log(err);
						setFormMessage(userForm, 'error', err.response.message);
					});

				userForm!.reset();
			} else {
				const data = { name, email, cityOfOperation: city, phoneNumber, username, password, metadata };

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
			}
		});

		document.querySelectorAll('.form__input').forEach((inputElement: any) => {
			inputElement.addEventListener('blur', (e: any) => {
				if (e!.target!.id === 'password' && e!.target?.value!.length > 0 && e.target.value.length < 6) {
					setInputError(inputElement, 'Password must be at least 8 characters in length');
				}

				if ((e!.target!.id === 'name' && e!.target!.value.length <= 2) || e!.target!.value.length >= 25) {
					setInputError(inputElement, 'Name must be more than two characters and less than 25 characters');
				}

				if (e!.target!.id === 'email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e!.target.value)) {
					setInputError(inputElement, 'Please enter a valid email address');
				}

				if (e.target.id === 'city' && e.target.value.length >= 25) {
					setInputError(inputElement, 'City cannot be 25 characters or more');
				}

				return;
			});

			inputElement.addEventListener('input', (e: any) => {
				clearInputError(inputElement);
			});
		});
	});
}

if (window.location.pathname.match(regexPath('/session/:sessionId/book'))) {
	document.addEventListener('DOMContentLoaded', () => {
		const bookForm = <HTMLFormElement>document.querySelector('#book-form');

		const userObject = localStorage.getItem('user');

		const user = JSON.parse(userObject as string);

		bookForm!.addEventListener('submit', (event) => {
			event.preventDefault();
			const title = (<HTMLInputElement>document.querySelector('input[data-title]'))!.value;
			const date = (<HTMLInputElement>document.querySelector('input[data-date]'))!.value;
			const notes = (<HTMLTextAreaElement>document.querySelector('textarea[data-notes]'))!.value;
			const sessionId = (<HTMLInputElement>document.querySelector('input[data-session-id]'))!.value;

			const data = { title, date, notes, userId: user.token, sessionId };

			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			};

			fetch('https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/bookings', options)
				.then((response) => response.json())
				.then((response) => console.log(response))
				.catch((err) => console.error(err));
		});
	});
}

if (window.location.pathname.match(regexPath('/merchant/create'))) {
	const userObject = window.localStorage.getItem('user');

	const merchant = JSON.parse(userObject as string);

	document.addEventListener('DOMContentLoaded', () => {
		const sessionForm = document.querySelector('#session-form');

		document.querySelector('#startsAt')!.addEventListener('change', () => {
			const startsAt = new Date().toDateString() + ' ' + (<HTMLInputElement>document.querySelector('#startsAt'))!.value;

			const duration = (<HTMLSelectElement>document.querySelector('#duration'))!.value;

			// @ts-ignore
			const endsAt = moment(new Date(startsAt)).add(duration, 'm').toDate();

			const endTime = new Date(endsAt).toLocaleTimeString();

			document.querySelector('#endsAt')!.setAttribute('value', endTime);
		});

		sessionForm!.addEventListener('submit', (event) => {
			event.preventDefault();
			const dayType = (<HTMLSelectElement>document.querySelector('#day-type'))!.value;
			const startsAt = (<HTMLInputElement>document.querySelector('#startsAt'))!.value;
			const endsAt = (<HTMLInputElement>document.querySelector('#endsAt'))!.value;

			const data = { type: dayType, startsAt, endsAt };

			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			};

			fetch(`https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/studios/${merchant.token}`, options)
				.then((response) => response.json())
				.then((response) => console.log(response))
				.catch((err) => console.error(err));
		});
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const logoutBtn = document.querySelector('#logout-btn');

	if (logoutBtn) {
		logoutBtn!.addEventListener('click', (e) => {
			localStorage.removeItem('user');
			window.location.replace(`/login`);
		});
	}
});
