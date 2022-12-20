import AbstractView from '../AbstractView';
import Protected from '../Authentication/Protected';
import Restricted from '../Authentication/Restricted';
import { Navbar } from '../../components/index';

class Book extends AbstractView {
	form: HTMLFormElement;
	constructor(params: any) {
		super(params);

		this.form = <HTMLFormElement>document.querySelector('#book-form');

		this.setTitle('Booking');
		// this.handleSubmit();
	}

	async render() {
		new Protected();

		new Restricted('USER');

		const navbar = await new Navbar(this.params).render();

		return `
      <section class="bg-blue-800 pb-8">
        <div class="container mx-auto px-4 sm:px-8">
          ${navbar}
					<div class="mt-4">
						<h3 class="text-white">Dashboard / Merchant</h3>
					</div>
        </div>
      </section>
			<section class="mt-16">
				<div class="max-w-3xl mx-auto px-4 sm:px-8">
					<div class="mt-8 gap-8">
						<h3 class="text-center text-2xl font-bold">Book A Session</h3>
					</div>
					
          <form id="book-form" class="max-w-sm mx-auto mt-12">
							<div class="flex flex-col gap-1">
								<label class="text-sm text-gray-700">Title</label>
								<input type="text" name="title" class="w-full p-3 border rounded-lg form__input" data-title />
							</div>
							<div class="mt-4 flex flex-col gap-1">
								<label class="text-sm text-gray-700">Date</label>
								<input type="date" name="date" id="date" class="w-full p-3 border rounded-lg form__input" data-date />
							</div>
							<div class="mt-4 flex flex-col gap-1">
								<label for="note" class="text-sm text-gray-800">Notes</label>
								<textarea name="notes" rows="8" class="w-full p-3 border rounded-lg form__input" data-notes></textarea>
								<span class="form__input-error-message text-red-500 text-sm"></span>
							</div>

							<input type="hidden" value="${this.params.sessionId}" data-session-id />
					
							<div class="mt-6">
								<button  class="w-full bg-blue-600 p-3 text-base text-white rounded-lg">
									Save
								</button>
							</div>
						</form>
				</div>
			</section>
    `;
	}
}

export default Book;
