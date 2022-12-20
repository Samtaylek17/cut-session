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
        <form id="register" class="userForm bg-white max-w-md w-full mx-auto px-4 py-8 rounded-xl sm:px-8">
          <h1 class="text-2xl text-center" id="form-title">User Signup</h1>
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
          <div class="mt-4 flex flex-col gap-[1px]" id="dob-container">
            <label for="dob" class="text-sm text-gray-800 mb-4">Date of birth</label>
            <input type="date" name="dob" id="date" placeholder="John Doe" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="city" class="text-sm text-gray-800 mb-4">City of residence</label>
            <input type="text" name="city" id="city" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="phone" class="text-sm text-gray-800 mb-4">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="09056363639" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="username" class="text-sm text-gray-800 mb-4">Username</label>
            <input type="text" name="username" id="username" placeholder="username" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4 flex flex-col gap-[1px]">
            <label for="password" class="text-sm text-gray-800 mb-4">Password</label>
            <input type="password" name="password" id="password" placeholder="password" class="w-full p-3 border rounded-lg form__input" />
            <span class="form__input-error-message text-red-500 text-sm"></span>
          </div>
          <div class="mt-4">
					<h5 class="text-sm text-gray-800">Access Type</h5>
            <div class="flex gap-8 mt-3">
              <label class="flex gap-3 text-gray-800 text-sm cursor-pointer">
                <input type="radio" name="accessType" value="USER" checked />
                User
              </label>
              <label class="flex gap-3 text-gray-800 text-sm cursor-pointer">
                <input type="radio" name="accessType" value="MERCHANT" />
                Merchant
              </label>
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" id="submit-btn" class="w-full bg-blue-600 disabled:cursor-not-allowed p-3 text-base text-white rounded-lg">
              Signup
            </button>
          </div>
          
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
