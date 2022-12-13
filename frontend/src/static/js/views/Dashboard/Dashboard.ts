import AbstractView from '../AbstractView';
import Protected from '../Authentication/Protected';
import { Navbar } from '../../components/index';

export default class extends AbstractView {
	constructor(params: any) {
		super(params);
		this.setTitle('Dashboard');
		this.fetchUsers();
	}

	fetchUsers = async () => {
		const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

		try {
			const res = await Promise.all([
				fetch(
					'https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/clients?type=USER&limit=20&offset=1',
					options
				),
				fetch(
					'https://stoplight.io/mocks/pipeline/pipelinev2-projects/111233856/clients?type=MERCHANT&limit=20&offset=1',
					options
				),
			]);
			const data = await Promise.all(res.map((r) => r.json()));
			const [users, merchants] = data.flat();

			const userData = users.data.map((user: any) => {
				return `
						<div class="flex flex-col gap-2 border p-4 rounded-md shadow-md">
							<div class="flex gap-2">
		 						<h6>Name: </h6>
		 						<p class="capitalize">${user.name}</p>
		 					</div>
							 <div class="flex gap-2">
							 <h6>Email: </h6>
							 <p class="">${user.email}</p>
						 </div>
						 <div class="flex gap-2">
		 						<h6>Phone Number: </h6>
		 						<p class="">${user.phoneNumber}</p>
		 					</div>
		 				</div>
		 			`;
			});

			const merchantData = merchants.data.map((merchant: any) => {
				return `
						<div class="flex flex-col gap-2 border p-4 rounded-md shadow-md">
							<div class="flex gap-2">
		 						<h6>Name: </h6>
		 						<p class="capitalize">${merchant.name}</p>
		 					</div>
							 <div class="flex gap-2">
							 <h6>Email: </h6>
							 <p class="">${merchant.email}</p>
						 </div>
						 <div class="flex gap-2">
		 						<h6>Phone Number: </h6>
		 						<p class="">${merchant.phoneNumber}</p>
		 					</div>
		 				</div>
		 			`;
			});

			document.getElementById('user-container')!.innerHTML = userData;
			document.getElementById('merchant-container')!.innerHTML = merchantData;
		} catch {
			throw Error('Promise failed');
		}
	};

	async render() {
		new Protected();

		const navbar = await new Navbar(this.params).render();

		return `
      <section class="bg-blue-800 pb-8">
				<div class="container mx-auto px-4 sm:px-8">
					${navbar}
					<div class="mt-4">
						<h1 class="text-4xl text-white font-bold">Book your next studio session...</h1>
						<p class="text-base text-white mt-2">Lorem ipsum dolor sit amet, consectetur adip. Cum socis natoque penatibus et justo</p>
					</div>
				</div>
			</section>
			<section class="mt-24">
				<div class="container mx-auto px-4 sm:px-8">
					<h3 class="text-3xl">Merchants</h3>

					<div class="grid grid-cols-4 mt-8" id="merchant-container">		
					</div>

					<h3 class="text-3xl mt-8">Users</h3>

					<div class="grid grid-cols-4 mt-8" id="user-container">		
					</div>
					
				</div>
			</section>
    `;
	}
}
