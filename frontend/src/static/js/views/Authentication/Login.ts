import AbstractView from '../AbstractView';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Login');
	}

	async render() {
		return `
		<section class="bg-blue-400 min-h-screen py-16 flex justify-center items-center px-4">
			<form id="userForm" class="userForm bg-white max-w-md w-full mx-auto px-4 py-8 rounded-xl sm:px-8">
				<h1 class="text-2xl text-center">Login</h1>
				<div class="text-red-500 mt-4 form__message form__message--error"></div>
				<div class="mt-4 flex flex-col gap-[1px]">
					<label for="username" class="text-sm text-gray-800 mb-4">Username</label>
					<input type="text" name="username" id="username" placeholder="username" class="w-full p-3 border rounded-lg form__input" />
					<span class="form__input-error-message text-red-500 text-sm"></span>
				</div>
				<div class="mt-4 flex flex-col gap-[1px]">
					<label for="password" class="text-sm text-gray-800 mb-4">Password</label>
					<input type="text" name="password" id="password" placeholder="......." class="w-full p-3 border rounded-lg form__input placeholder:text-3xl" />
					<span class="form__input-error-message text-red-500 text-sm"></span>
				</div>
				<div class="mt-6">
					<button type="submit" class="w-full bg-blue-600 p-3 text-base text-white rounded-lg">
						Login
					</button>
				</div>
			</form>
		</section> 
	`;
	}
}
