import AbstractView from '../../views/AbstractView';

class Navbar extends AbstractView {
	constructor(params: any) {
		super(params);
		this.logout();
	}

	logout() {
		(<HTMLButtonElement>document.querySelector('#logout-btn'))?.addEventListener('click', () => {
			console.log('Fuck');
			localStorage.removeItem('user');
			window.location.replace('/login');
		});
	}

	async render() {
		return `
      <div class="flex flex-col gap-4 sm:justify-between sm:items-center py-4 sm:flex-row">
        <div>
          <h1 class="text-white text-3xl font-bold">estudioa.<span class="text-base">com</span></h1>
        </div>
        <div class="flex gap-8 items-center">
          <h5 class="text-white text-base">Welcome</h5>
          <button type="button" id="logout-btn" class="bg-white text-blue-700 px-8 py-2 rounded-md">Logout</button>
        </div>
      </div>
    `;
	}
}

export default Navbar;
