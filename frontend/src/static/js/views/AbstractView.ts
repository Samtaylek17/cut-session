export default class AbstractView {
	params: any;
	constructor(params: any) {
		this.params = params;
	}

	setTitle(title: string) {
		document.title = title;
	}

	async render() {
		return '';
	}
}
