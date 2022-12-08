import Dashboard from './views/Dashboard';
import Posts from './views/Posts';
import Post from './views/Post';
import Login from './views/Authentication/Login';
import Signup from './views/Authentication/Signup';

/**
 * It takes a path like `/users/:id` and returns a regular expression that matches `/users/123` but not
 * `/users/123/posts`
 * @param {string} path - The path to match against.
 */
const pathToRegex = (path: string) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

/**
 * It takes a match object and returns an object with the keys being the route parameters and the
 * values being the values of the route parameters
 * @param match - { route: { path: string; view: typeof Dashboard }; result: RegExpMatchArray | null }
 * @returns An object with the keys and values of the route params.
 */
const getParams = (match: { route: { path: string; view: typeof Dashboard }; result: RegExpMatchArray | null }) => {
	const values = match!.result!.slice(1);
	const keys = Array.from(match!.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

	return Object.fromEntries(
		keys.map((key, i) => {
			return [key, values[i]];
		})
	);
};

const navigateTo = (url: string | URL | null | undefined) => {
	history.pushState(null, '', url);
	router();
};

const router = async () => {
	const routes = [
		{ path: '/', view: Dashboard },
		{ path: '/posts', view: Posts },
		{ path: '/posts/:id', view: Post },
		{ path: '/signup', view: Signup },
		{ path: '/login', view: Login },
	];

	// Test each route for potential match
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			result: location.pathname.match(pathToRegex(route.path)),
		};
	});

	let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

	if (!match) {
		match = {
			route: routes[0],
			result: [location.pathname],
		};
	}

	const view = new match.route.view(getParams(match));

	document.querySelector('#app')!.innerHTML = await view.render();
};

/* It's listening for the popstate event, which is fired when the user navigates to a new page. */
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		if ((<HTMLLinkElement>e.target!).matches('[data-link]')) {
			e.preventDefault();
			navigateTo((<HTMLLinkElement>e!.target!).href);
		}
	});

	router();
});
