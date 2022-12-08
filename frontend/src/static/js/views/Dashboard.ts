import AbstractView from './AbstractView';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Dashboard');
	}

	async render() {
		return `
      <h1>Welcome to Dashboard</h1>
      <p>Na here we dey</p>    
    `;
	}
}
