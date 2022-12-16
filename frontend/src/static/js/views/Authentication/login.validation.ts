/* Checking if the current page is the login page. */
if (window.location.pathname.includes('/login')) {
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
						const nextRoute = url.searchParams.get('redirect') || '/';
						window.location.replace(nextRoute);
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

document.addEventListener('DOMContentLoaded', () => {
	const logoutBtn = document.querySelector('#logout-btn');

	if (logoutBtn) {
		logoutBtn!.addEventListener('click', (e) => {
			localStorage.removeItem('user');
			window.location.replace(`/login?redirect=${window.location.href.replace(window.location.origin, '')}`);
		});
	}
});
