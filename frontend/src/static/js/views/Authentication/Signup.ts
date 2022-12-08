import AbstractView from '../AbstractView';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Signup');
	}

	async render() {
		return `
      <section class="bg-blue-400 min-h-screen flex justify-center items-center">
        <form class="bg-white max-w-md w-full mx-auto p-8 rounded-xl">
          <h1 class="text-2xl text-center">User Signup</h1>
          <div class="text-red-500"></div>
        </form>
      </section> 
    `;
	}
}
