class Login {
	form: Element;
	fields: string[];
	constructor(form: Element, fields: string[]) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();
	}

	validateonSubmit() {
		let self = this;
		this.form.addEventListener('submit', (event) => {
			event.preventDefault();
			self.fields.forEach((field) => {
				const input = <HTMLInputElement>document.querySelector(`#${field}`);
				console.log(input!.value);
			});
		});
	}
}

const form = document.querySelector('.loginForm');

if (form) {
	const fields = ['username', 'password'];
	const validator = new Login(form, fields);
}
