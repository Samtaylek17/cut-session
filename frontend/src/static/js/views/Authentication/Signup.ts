import AbstractView from '../AbstractView';

export default class extends AbstractView {
	state: any;
	form: any;

	constructor(params: any) {
		super(params);
		this.setTitle('Signup');
	}

	async render() {
		return `
      <section class="bg-blue-400 min-h-screen py-16 flex justify-center items-center px-4">
        <form id="userForm" class="userForm bg-white max-w-md w-full mx-auto px-4 py-8 rounded-xl sm:px-8">
          <h1 class="text-2xl text-center">User Signup</h1>
          <div class="text-red-500 mt-4 form__message form__message--error"></div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="name" class="text-sm text-gray-800 mb-4">Full Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="email" class="text-sm text-gray-800 mb-4">Email</label>
            <input type="text" name="email" id="email" placeholder="greg@example.com" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="date" class="text-sm text-gray-800 mb-4">Date of birth</label>
            <input type="date" name="date" id="date" placeholder="John Doe" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="city" class="text-sm text-gray-800 mb-4">City of residence</label>
            <input type="text" name="city" id="city" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="phone" class="text-sm text-gray-800 mb-4">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="+234905636363" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
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
              Signup
            </button>
          </div>
          <p class="mt-4 text-center">
          Are you a merchant?
            <a class="form__link text-blue-500 link-merchant" href="./signup">Signup here</a>
          </p>
          <div class="mt-6">
            <p class="text-center">Already have an account?
              <a class="text-blue-500" href="/login" data-link>Login here</a>
            </p>
          </div>
        </form>


        <form id="merchantForm" class="merchantForm bg-white hidden max-w-md w-full mx-auto px-4 py-8 rounded-xl sm:px-8">
          <h1 class="text-2xl text-center">Merchant Signup</h1>
          <div class="text-red-500 mt-4 form-message form-message-error"></div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="name" class="text-sm text-gray-800 mb-4">Full Name</label>
            <input type="text" name="name" id="merchant-name" placeholder="John Doe" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="email" class="text-sm text-gray-800 mb-4">Email</label>
            <input type="text" name="email" id="merchant-email" placeholder="greg@example.com" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="city" class="text-sm text-gray-800 mb-4">City of residence</label>
            <input type="text" name="city" id="merchant-city" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="phone" class="text-sm text-gray-800 mb-4">Phone Number</label>
            <input type="text" name="phone" id="merchant-phone" placeholder="+234905636363" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="username" class="text-sm text-gray-800 mb-4">Username</label>
            <input type="text" name="username" id="merchant-username" placeholder="username" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="password" class="text-sm text-gray-800 mb-4">Password</label>
            <input type="text" name="password" id="merchant-password" placeholder="......." class="w-full p-3 border rounded-lg form__input placeholder:text-3xl" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-6">
            <button type="submit" class="w-full bg-blue-600 p-3 text-base text-white rounded-lg">
              Signup
            </button>
          </div>
          <p class="mt-4 text-center">
          Are you a user?
            <a class="form__link text-blue-500 link-user" href="./signup">Signup here</a>
          </p>
          <div class="mt-6">
            <p class="text-center">Already have an account?
              <a class="text-blue-500" href="/login" data-link>Login here</a>
            </p>
          </div>
        </form>
        
      </section> 
    `;
	}
}
