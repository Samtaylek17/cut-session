interface IUser {
	merchantId: string;
	token: string;
	userId: string;
	accessType: 'USER' | 'MERCHANT';
}

class Protected {
	constructor() {
		document.querySelector('#app')!.innerHTML = '';
		const user = localStorage.getItem('user');
		this.validateAuth(JSON.parse(user as string));
	}

	validateAuth(user: IUser) {
		if (user === null || !user.token || user.token === null) {
			window.location.replace('/login');
		}
		return;
	}

	logout() {
		localStorage.removeItem('user');
		window.location.replace('/login');
	}
}

export default Protected;
