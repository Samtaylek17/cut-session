import AbstractView from './AbstractView';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Viewing Post');
	}

	async render() {
		console.log(this.params);
		return `
      <h1 class="text-red-500">Welcome to post ${this.params.id}</h1>
      <p>You are viewing Post</p>    
    `;
	}
}
