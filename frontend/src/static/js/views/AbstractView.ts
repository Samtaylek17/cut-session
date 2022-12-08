export default class AbstractView {
	params: any;
	constructor(params: any) {
		this.params = params;

		console.log(this.params);
	}

	setTitle(title: string) {
		document.title = title;
	}

	async render() {
		return '';
	}
}

// export { AbstractView as default };