import AbstractView from '../AbstractView';
import Protected from '../Authentication/Protected';
import Restricted from '../Authentication/Restricted';
import { Navbar } from '../../components/index';

class CreateSession extends AbstractView {
	constructor(params: any) {
		super(params);

		this.setTitle('Studio');
	}

	async render() {
		new Protected();

		new Restricted('MERCHANT');

		const navbar = await new Navbar(this.params).render();

		return `
      <section class="bg-blue-800 pb-8">
        <div class="container mx-auto px-4 sm:px-8">
          ${navbar}
        </div>
      </section>
			<section class="mt-16">
				<div class="max-w-3xl mx-auto">
						<h3 class="text-center text-2xl font-bold text-slate-800">Create New Session</h3>

						<form id="session-form" class="max-w-sm mx-auto mt-12">
							<div class="flex flex-col gap-1">
								<label class="text-sm text-gray-700">Session Type</label>
								<select name="type" id="day-type" class="w-full p-3 border rounded-lg form__input">
									<option value="WeekEnd">WeekEnd</option>
									<option value="WeekDay">WeekDay</option>
								</select>
							</div>
							<div class="mt-4 flex flex-col gap-1">
								<label class="text-sm text-gray-700">Duration</label>
								<select name="duration" id="duration" class="w-full p-3 border rounded-lg form__input">
									<option value="45">45 Minutes</option>
									<option value="60">60 Minutes</option>
									<option value="90">90 Minutes</option>
								</select>
							</div>
							<div class="mt-4 flex flex-col gap-1">
								<label for="startsAt" class="text-sm text-gray-800">Starts At</label>
								<input type="time" step="1" min="09:00" max="20:00" name="startsAt" id="startsAt" class="w-full p-3 border rounded-lg form__input" />
								<span class="form__input-error-message text-red-500 text-sm"></span>
							</div>
							<div class="mt-4 flex flex-col gap-[1px]">
								<label for="endsAt" class="text-sm text-gray-800">Ends At</label>
								<input type="time" step="1" disabled name="endsAt" id="endsAt" class="w-full p-3 border rounded-lg form__input" />
								<span class="form__input-error-message text-red-500 text-sm"></span>
							</div>
							<div class="mt-6">
								<button type="submit" class="w-full bg-blue-600 p-3 text-base text-white rounded-lg">
									Save
								</button>
							</div>
						</form>
				</div>
			</section>
    `;
	}
}

export default CreateSession;
