import AbstractView from './AbstractView';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Posts');
	}

	async render() {
		return `
      <h1 class="text-red-600">Welcome to Posts</h1>
      <p>You are viewing Post</p>    
    `;
	}
}
