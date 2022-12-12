if (window.location.pathname.includes('/login')) {
	function setFormMessage(formElement: Element | null, type: string, message: any) {
		const messageElement = formElement!.querySelector('.form__message');

		messageElement!.textContent = message;

		messageElement!.classList.remove('form__message--success', 'form__message--error');
		messageElement!.classList.add(`form__message--${type}`);
	}

	function setInputError(
		inputElement: {
			classList: { add: (arg0: string) => void };
			parentElement: { querySelector: (arg0: string) => { (): any; new (): any; textContent: any } };
		},
		message: any
	) {
		inputElement.classList.add('text-red-500');
		inputElement.parentElement.querySelector('.form__input-error-message').textContent = message;
	}

	function clearInputError(inputElement: Element) {
		inputElement!.classList.remove('text-red-500');
		inputElement!.parentElement!.querySelector('.form__input-error-message')!.textContent = '';
	}

	document.addEventListener('DOMContentLoaded', () => {
		const loginForm = document.querySelector('#loginForm');

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
						window.localStorage.setItem('token', response.token);
						window.localStorage.setItem('user', response.userId);
						window.location.replace('/');
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
