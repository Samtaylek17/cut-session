import { navigateTo } from '../../index';

interface IUser {
	merchantId: string;
	token: string;
	userId: string;
	accessType: 'USER' | 'MERCHANT';
}

class Restricted {
	role: 'USER' | 'MERCHANT';
	constructor(role: 'USER' | 'MERCHANT') {
		this.role = role;
		const user = localStorage.getItem('user');
		this.authorizeUser(JSON.parse(user as string));
	}

	authorizeUser(user: IUser) {
		if (user.accessType !== this.role) {
			navigateTo('/');
		}

		return;
	}
}

export default Restricted;
