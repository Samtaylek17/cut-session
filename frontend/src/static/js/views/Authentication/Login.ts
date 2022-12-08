import AbstractView from '../AbstractView';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Login');
	}

	async render() {
		return `
      <h1>Login Page</h1>
      <p>This is the login page</p>    
    `;
	}
}
